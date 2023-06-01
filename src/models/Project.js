export class Project {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.coverImg = data.coverImg
    this.projectImgs = data.projectImgs
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
  }
}
