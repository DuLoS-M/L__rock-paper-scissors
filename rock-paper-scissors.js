function getComputerChoice(){
    possible_choices = ['Rock', 'Paper', 'Scissors']
    choice = Math.floor(Math.random() * 3)
    return possible_choices[choice]
}

console.log(getComputerChoice())