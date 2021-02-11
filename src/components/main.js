import React from "react"
import "./layout.css"

class Main extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div
        className="centered"
        style={{
          lineHeight:0.9,
          padding:`0 1.0875rem 1.45rem`
        }}
        >
        <p>carrie kaili sun is currently </p>
        <p> in los angeles </p>
        <p>making things move at <a href="http://brud.fyi">brud</a>,</p>
        <p>playing sounds on <a href="nts.live/shows/kaili">NTS</a>,</p>
        <p>and dreaming up new visual worlds.</p>
        <br />
        <p>+ <a href="mailto:info@carriekaili.com">info@carriekaili.com</a></p>
        <p>+ <a href="http://instagram.com/kaili_xcx">instagram</a></p>
        <p>+ <a href="http://soundcloud.com/kailidj">soundcloud</a></p>
      </div>
    )
  }
}

export default Main
