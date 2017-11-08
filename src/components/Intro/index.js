import React from 'react'
import styled from 'styled-components'

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate
  this.el = el
  this.loopNum = 0
  this.period = parseInt(period, 10) || 2000
  this.txt = ''
  this.tick()
  this.isDeleting = false
}

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length
  var fullTxt = this.toRotate[i]

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1)
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1)
  }

  this.el.innerHTML =
    '<span class="wrap">' + this.txt.replace(/_/g, '&nbsp;') + '</span>'

  var that = this
  var delta = 200 - Math.random() * 100

  if (this.isDeleting) {
    delta /= 2
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period
    this.isDeleting = true
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false
    this.loopNum++
    delta = 500
  }

  setTimeout(function() {
    that.tick()
  }, delta)
}

class IntroBase extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.phrases) {
      this.phrases = this.props.phrases
    }
  }
  componentDidMount() {
    new TxtType(this.el, this.phrases, 2000)
  }
  phrases = [
    'Art&nbsp;Direction, Software UX, Layouts',
    'Interaction, Empathy, Engagement',
    'Digital, Geometry, Environment',
    'Visuals, Emotion, Language',
  ]
  render() {
    return (
      <div
        style={{ width: '200px', position: 'relative' }}
        className={this.props.className}
      >
        <span ref={el => (this.el = el)} />
      </div>
    )
  }
}

export const Intro = styled(IntroBase)`
  font-size: 76px;
  word-break: keep-all;
  font-weight: 300;
  line-height: ${1.38};
  min-height: ${1.38 * 3}em;
  text-align: left;
  color: #001d60;
  margin: 26px 30px;
  padding: 26px;
  box-sizing: content-box;
  @media (max-width: 1300px) {
    font-size: 50px;
    min-height: ${1.4 * 3}em;
    margin: 26px 0;
  }
  @media (max-width: 580px) {
    font-size: 38px;
    line-height: ${1.32}em;
    min-height: ${1.32 * 3} em;
  }
  .wrap {
    border-right: 0.08em solid #5261ff;
    padding-right: 10px;
  }
`
