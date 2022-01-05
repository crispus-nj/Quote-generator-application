export class FormService{
    quotes = [
        { id: 1,
          name: "crispu Njenga",
          email: "njengacs@gmail.com",
          quote: "No pain no gain",
          status: "Upvote",
          upvote: 0,
          downvote: 0
        },
        { id: 2,
          name: "Levis Oleguna",
          email: "oleguna@gmail.com",
          quote: "Hardwork Pays",
          status: "Downvote",
          upvote: 0,
          downvote: 0
        },
        { id: 3,
          name: "Kioko masaai",
          email: "masaai@gmail.com",
          quote: "focus on future",
          status: "Upvote",
          upvote: 0,
          downvote: 0
        }
      ]
      onFormData(id: number, name: string, email: string, quote: string, status: string, upvote: number, downvote: number){
        this.quotes.push({
            id: id,
            name: name,
            email: email,
            quote: quote,
            status: status,
            upvote: upvote,
            downvote: downvote
        })
      }
      onLoadStatus(){
        console.log(this.quotes)
      }
}