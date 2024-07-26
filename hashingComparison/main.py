import bcrypt
import pyscrypt
from argon2 import PasswordHasher, Type
from tabulate import tabulate
import time
import os

def generate_random_salt(length=16):
    return os.urandom(length)

def hash_bcrypt(password):
    start_time = time.time()
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode(), salt)
    end_time = time.time()
    hashing_time = (end_time - start_time) * 1000  # convert to milliseconds
    return hashed.decode(), salt.decode(), hashing_time

def hash_scrypt(password):
    salt = generate_random_salt()  # Generate a random salt
    start_time = time.time()
    hashed = pyscrypt.hash(password.encode(), salt=salt, N=16384, r=8, p=1, dkLen=32)
    end_time = time.time()
    hashing_time = (end_time - start_time) * 1000  # convert to milliseconds
    return hashed.hex(), salt, hashing_time

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
    salt = hashed.split('$')[4]  # Extract the salt from the hash
    return hashed, salt, hashing_time

def main():
    password = input("Enter a password: ")

    print("Hashing with bcrypt...")
    bcrypt_hash, bcrypt_salt, bcrypt_time = hash_bcrypt(password)
   
    print("Hashing with scrypt...")
    scrypt_hash, scrypt_salt, scrypt_time = hash_scrypt(password)
   
    print("Hashing with argon2...")
    argon2_hash, argon2_salt, argon2_time = hash_argon2(password)
    
    table = [
        ["bcrypt", bcrypt_hash, bcrypt_salt, f"{bcrypt_time:.2f} ms"],
        ["scrypt", scrypt_hash, scrypt_salt, f"{scrypt_time:.2f} ms"],
        ["argon2", argon2_hash, argon2_salt, f"{argon2_time:.2f} ms"]
    ]

    headers = ["Algorithm", "Hash", "Salt", "Hashing Time (ms)"]
    print(tabulate(table, headers, tablefmt="grid"))

if __name__ == "__main__":
    main()