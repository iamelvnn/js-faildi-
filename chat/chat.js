function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
class Message{
constructor(author, time, txt){
this.author = author;
this.time = time;
this.txt = txt;
}
toString() {
    return this.time + ' ' + this.author + ': ' + this.txt;
}
}

class Answer extends Message{
        constructor(author,time,txt,history) {
          super(author,txt,time),
          this.history = [];

      }
      
      showHistory() {
          for (const msg of this.history) {
            console.log(msg.toString());
        }
      }
      
      send(author, txt) {
          this.history.push(new Message(author, gettime(), txt));
      }
    }
let messenger = new Answer();
messenger.send('Ruslan', 'naza di daniwan')
messenger.send('Ruhid', 'He ')
messenger.send('Ilham','onda salamlar' )
messenger.showHistory()