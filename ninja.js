#!/usr/bin/node

class Ninja {
    constructor(name, rank, power) {
        this.name = name;
        this.rank = rank;
        this.power = power;
    }

    iam() {
        console.log("i am " + this.name + " i am the " + this.rank);
    }
}

class Leaf extends Ninja {

    iam() {
        super.iam()
        console.log("from the Leaf Village")
    }
}

class Sand extends Ninja {

    iam() {
        super.iam()
        console.log("from the Sand Village")
    }
}

naruto = new Leaf("Naruto", "Hokage", 999);
naruto.iam();

gaara = new Sand("gaara", "Hokage", 950);
gaara.iam();