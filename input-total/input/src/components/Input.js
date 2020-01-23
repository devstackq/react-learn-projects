import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div className=" input-group">
        <div className="input-group-prepend">
          <input
            className=" form-control inp"
            name="city"
            type="text"
            defaultValue={this.props.city[this.props.idxD].name}
            onChange={e => this.props.inputChange(e.target.value)}
            onClick={() => this.props.histListShow()}
          />
          <button
            onClick={() => this.props.cityToggle()}
            type="button"
            className="btn btn-outline dropdown-toggle"
          ></button>
        </div>
        <button
          className={this.props.show ? "show btn-del" : "hidden"}
          onClick={e => this.props.deleteCity(e, this.props.idxD)}
        >
          x
        </button>
        {console.log(this.props.idxD, "index choiced city")}
      </div>
    );
  }
}

export default Input;
