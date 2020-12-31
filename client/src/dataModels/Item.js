class Item {
    // This constructor calls Object.create(Item.prototype) for you
    // and returns the results of that object
    constructor({name, date, dueDate=null, person=null}) {
        this.name = name
        this.date = date
        this.dueDate = dueDate
        this.person = person
    }
    // This is automatically added to the prototype chain (class syntactic sugar)
    addPerson(person) {
        return new Item({
            name: this.name,
            date: this.date,
            dueDate: this.dueDate,
            person
        })
    }
}

export default Item

// Notes for future - below code is equivalent for prototype chain usage
// multi instance issues (memory issues)
// reference method object (memory solved, but update in two places)
// Object.create(object) will have your new object reference failed lookups to that object instead
// new - tells a function to delegate failed lookups to the functions prototype
// Great tutorial at https://ui.dev/beginners-guide-to-javascript-prototype/

/*
function Item({name, date, dueDate=null, person=null}) {
    let item = Object.create(Item.prototype)
    item.name = name
    item.date = date
    item.dueDate = dueDate
    item.person = person
    return item
}

Item.prototype.addPerson = function(person) {
    return new Item({
        name: this.name,
        date: this.date,
        dueDate: this.dueDate,
        person
    })
}

export default Item
*/