# Password Hashing Comparison Script
This script allows users to input a password and then compares the hashing times and brute-force resistance estimates for bcrypt, scrypt, and Argon2id hashing algorithms.

## Requirements
Python 3.6 or higher
The following Python packages:
- bcrypt
- pyscrypt
- argon2-cffi
- tabulate
## Setup
### 1. Clone the Repository
First, clone the repository to your local machine using Git:

git clone https://github.com/TLodosDurak/EcommerceSecurity
cd ecommercesecurity/hashingComparison

### 2. Create a Virtual Environment
Creating a virtual environment is a good practice to manage dependencies for your project. Follow the steps below to create and activate a virtual environment:

On Windows
```
python -m venv venv
venv\Scripts\activate
```
On macOS/Linux
```
python3 -m venv venv
source venv/bin/activate
```
### 3. Install the Dependencies
Once the virtual environment is activated, install the required packages using pip:
```
pip install bcrypt pyscrypt argon2-cffi tabulate
```
## Usage
Run the script using Python:
```
python hash_comparison.py
```
Follow the on-screen instructions to input a password. The script will then display a table with the hash, hashing time, and brute-force time estimate for each algorithm.

## License
This project is licensed under the MIT License






