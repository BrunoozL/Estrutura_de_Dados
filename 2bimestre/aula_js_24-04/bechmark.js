const BinaryTree = require("./arvore_binaria");
const LinkedList = require("../../1bimestre/aula_js_20-03/linked_list");
const DoublyLinkedList = require("../../1bimestre/aula_js_27-03/doubly_linked_list");

const tree = new BinaryTree();
const list = new LinkedList();
const doublylist = new DoublyLinkedList();

function getRandomIntRange(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let size = 10000;


console.time("tymerFila");
for (let i = 0; i < 10000; i++)
{
    tree.insert(i);
}