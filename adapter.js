import define from 'define-properties'
export default createNodeIterator


function createNodeIterator(root, whatToShow = 0xFFFFFFFF, filter = null) {
  let iter = this.createNodeIterator(root, whatToShow, filter, false)
  return new NodeIterator(iter, root, whatToShow, filter)
}


class NodeIterator {
  constructor(iter, root, whatToShow, filter) {
    define(this, {
      root: root,
      whatToShow: whatToShow,
      filter: filter,
      referenceNode: root,
      pointerBeforeReferenceNode: true,
      _iter: iter,
    })
  }

  nextNode() {
    let result = this._iter.nextNode()
    this.pointerBeforeReferenceNode = false
    if (result === null) return null
    this.referenceNode = result
    return this.referenceNode
  }

  previousNode() {
    let result = this._iter.previousNode()
    this.pointerBeforeReferenceNode = true
    if (result === null) return null
    this.referenceNode = result
    return this.referenceNode
  }

  toString() {
    return '[object NodeIterator]'
  }
}
