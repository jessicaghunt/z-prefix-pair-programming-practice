class GalvanizeSet {
  constructor(set) {
    this.set = []

  }
  getSize(){
    return this.set.length
  }

  insert(item){
if(this.set.includes(item)){
return
}else {
    this.set.push(item)
    return this.set
}
  }

contains(item) {
    if(this.set.includes(item)){
    return true
  }
    return false
}

delete(item) {
  if(!this.set.includes(item)){
    return false
  }else if(this.set.includes(item)){
    const index = this.set.indexOf(item)
    this.set.splice(index, 1)
    return true
  }

}
}


module.exports = GalvanizeSet