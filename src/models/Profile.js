export class Profile {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.resume = data.resume
    this.socialPlatform = data.github || data.linkedin
  }
}
