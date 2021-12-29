export class FormService{
    quotes = [
        {
          name: "crispu Njenga",
          email: "njengacs@gmail.com",
          quote: "No pain no gain",
          status: "Upvote"
        },
        {
          name: "Levis Oleguna",
          email: "oleguna@gmail.com",
          quote: "Hardwork Pays",
          status: "Downvote"
        },
        {
          name: "Kioko masaai",
          email: "masaai@gmail.com",
          quote: "focus on future",
          status: "Upvote"
        }
      ]
      onFormData(name: string, email: string, quote: string, status: string){
        this.quotes.push({
            name: name,
            email: email,
            quote: quote,
            status: status
        })
      }
      onLoadStatus(){
        console.log(this.quotes)
      }
}