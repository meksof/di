// Linked List
export class Node {
    constructor(public data: any, public next?: Node) { }
}

// Stack implemented using LinkedList
export class Stack {
    /**
     * La taille de la pile
     */
    size = 0;

    constructor(public top?: Node) { }

    push(data: any) {
        let node = new Node(data);

        node.next = this.top;
        this.top = node;
        this.size++;

        return this.top;
    }

    pop() {
        if (this.top !== null) {
            let topItem = this.top?.data;
            this.top = this.top?.next;
            this.size--;
            return topItem;
        }
        return null;
    }

    print() {
        console.log('current stack size: ', this.size);
        let curr = this.top;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    };
}
