function UserCreator(name, score) {
    this.name = name;
    this.score = score;
}

UserCreator.prototype.increment = function() {

    console.log('outer func', this); // refers to the created object (i.e, what's on the left of the dot)

    // function add1() {
    //     this.score++;
    //     console.log('inner func', this); // refers to window object
    // }

    const add1 = () => this.score++;

    add1();
}

UserCreator.prototype.login = function() {
    console.log('Login');
}

const user1 = new UserCreator('Eva', 10);

user1.increment();