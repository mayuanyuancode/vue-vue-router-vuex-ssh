import '../assets/styles/footer.styl'

export default {
  data () {
    return {
      author: 'Jokcy'
    }
  },
  render (h) {
    // vue 解析jsx语法
    // createElement('div')
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
