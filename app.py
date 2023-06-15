from flask import Flask, jsonify, request

app = Flask(__name__)

users = []

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify([user.__dict__ for user in users])

@app.route('/users', methods=['POST'])
def add_user():
    data = request.get_json()
    firstname = data['firstname']
    lastname = data['lastname']
    email = data['email']
    emergyco1 = data['emergyco1']
    emergyco2 = data['emergyco2']
    allergy = data['allergy']
    password = data['password']
    confirmpass = data['confirmpass']

    user = User(firstname, lastname, email, emergyco1, emergyco2, allergy, password, confirmpass)
    users.append(user)
    return jsonify({"message": "User added successfully"})

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    for user in users:
        if user.id == user_id:
            users.remove(user)
            return jsonify({"message": "User deleted successfully"})
    return jsonify({"message": "User not found"})

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    for user in users:
        if user.id == user_id:
            user.firstname = data.get('firstname', user.firstname)
            user.lastname = data.get('lastname', user.lastname)
            user.email = data.get('email', user.email)
            user.emergyco1 = data.get('emergyco1', user.emergyco1)
            user.emergyco2 = data.get('emergyco2', user.emergyco2)
            user.allergy = data.get('allergy', user.allergy)
            user.password = data.get('password', user.password)
            user.confirmpass = data.get('confirmpass', user.confirmpass)
            return jsonify({"message": "User updated successfully"})
    return jsonify({"message": "User not found"})

class User:
    def __init__(self, firstname, lastname, email, emergyco1, emergyco2, allergy, password, confirmpass):
        self.id = len(users) + 1
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.emergyco1 = emergyco1
        self.emergyco2 = emergyco2
        self.allergy = allergy
        self.password = password
        self.confirmpass = confirmpass

if __name__ == '__main__':
    app.run(debug=True, port=2000)




