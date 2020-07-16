function tosy1(): void {
    let userInput: string = (<HTMLInputElement>document.getElementById("userInput")).value;
    document.getElementById("mainInfo").innerHTML = "You wrote: " + userInput;
    console.log(userInput);
}
