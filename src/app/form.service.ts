export class FormService{
    quotes = [
        {
          name: "crispu Njenga",
          email: "njengacs@gmail.com",
          quote: "No pain no gain"
        },
        {
          name: "Levis Oleguna",
          email: "oleguna@gmail.com",
          quote: "Hardwork Pays"
        },
        {
          name: "Kioko masaai",
          email: "masaai@gmail.com",
          quote: "focus on future"
        }
      ]
      onFormData(name: string, email: string, quote: string){
        this.quotes.push({
            name: name,
            email: email,
            quote: quote
        })
      }
}