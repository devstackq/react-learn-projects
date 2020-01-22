import React from "react";

//const Input = props => {
class Input extends React.Component {
  //onSubmit={() => props.deleteItem()
  // <input onChange={(e) => this.changeCarsValueP(e.target.value, 1)} />
  render() {
    return (
      <div className=" input-group">
        <div class="input-group-prepend">
          <input
            className=" form-control inp"
            name="city"
            type="text"
            defaultValue={this.props.city[this.props.idx].name}
            onChange={e => this.props.inputChange(e.target.value)}
            onClick={() => this.props.inputClick()}
          />
          <button
            onClick={() => this.props.cityToggle()}
            type="button"
            className="btn btn-outline dropdown-toggle"
          ></button>
        </div>
        <button
          className={this.props.show ? "show btn-del" : "hidden"}
          onClick={e => this.props.deleteItem(e)}
        >
          x
        </button>
        {console.log(this.props.idx, "index city")}
        {console.log(this.props.deleted, "delete status")}
      </div>
    );
  }
}

export default Input;
