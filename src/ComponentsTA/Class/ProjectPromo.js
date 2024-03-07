export default class ProjectPromo {
    title = ""
    description = ""
    date = ""
    img = ""
  
    constructor(initializer) {
      this.id = initializer.id;
      this.title = initializer.title;
      this.img = initializer.img;
      this.description = initializer.description;
      this.date = initializer.date;
  
    }
  }