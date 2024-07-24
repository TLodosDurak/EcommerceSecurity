import bcrypt
import pyscrypt
from argon2 import PasswordHasher, Type
from tabulate import tabulate
import time

# Assuming average modern CPU speed for hash calculations
hashes_per_second = {
    'bcrypt': 100,  # bcrypt takes about 0.01 seconds per hash
    'scrypt': 50,   # scrypt is more complex, around 0.02 seconds per hash
    'argon2': 20    # argon2 is more complex, around 0.05 seconds per hash
}

def hash_bcrypt(password):
    start_time = time.time()
    hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    end_time = time.time()
    hashing_time = (end_time - start_time) * 1000  # convert to milliseconds
    return hashed.decode(), hashing_time

def hash_scrypt(password):
    start_time = time.time()
    hashed = pyscrypt.hash(password.encode(), salt=b'some_salt', N=16384, r=8, p=1, dkLen=32)
    end_time = time.time()
    hashing_time = (end_time - start_time) * 1000  # convert to milliseconds
    return hashed.hex(), hashing_time

def hash_argon2(password):
    ph = PasswordHasher(
        time_cost=3,    # Number of iterations
        memory_cost=65536,  # Memory cost in kibibytes
        parallelism=4,  # Number of parallel threads
        hash_len=32,    # Length of the hash
        salt_len=16,    # Length of the salt
        type=Type.ID    # Argon2id variant
    )
    start_time = time.time()
    hashed = ph.hash(password)
    end_time = time.time()
    hashing_time = (end_time - start_time) * 1000  # convert to milliseconds
    return hashed, hashing_time

def estimate_brute_force_time(password_length, char_set_size, algorithm):
    total_combinations = char_set_size ** password_length
    hash_rate = hashes_per_second[algorithm]
    seconds = total_combinations / hash_rate
    years = seconds / (60 * 60 * 24 * 365)
    return years

def main():
    password = input("Enter a password: ")
    password_length = len(password)
    char_set_size = 62  # e.g., [a-zA-Z0-9]

    print("Hashing with bcrypt...")
    bcrypt_hash, bcrypt_time = hash_bcrypt(password)
    bcrypt_brute_force = estimate_brute_force_time(password_length, char_set_size, 'bcrypt')

    print("Hashing with scrypt...")
    scrypt_hash, scrypt_time = hash_scrypt(password)
    scrypt_brute_force = estimate_brute_force_time(password_length, char_set_size, 'scrypt')

    print("Hashing with argon2...")
    argon2_hash, argon2_time = hash_argon2(password)
    argon2_brute_force = estimate_brute_force_time(password_length, char_set_size, 'argon2')

    table = [
        ["bcrypt", bcrypt_hash, f"{bcrypt_time:.2f} ms", f"{bcrypt_brute_force:.2e} years"],
        ["scrypt", scrypt_hash, f"{scrypt_time:.2f} ms", f"{scrypt_brute_force:.2e} years"],
        ["argon2", argon2_hash, f"{argon2_time:.2f} ms", f"{argon2_brute_force:.2e} years"]
    ]

    headers = ["Algorithm", "Hash", "Hashing Time (ms)", "Brute-force Time Estimate"]
    print(tabulate(table, headers, tablefmt="grid"))

if __name__ == "__main__":
    main()
