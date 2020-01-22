import React from 'react'

//const Input = props => {
class Input extends React.Component {
    //onSubmit={() => props.deleteItem()
    // <input onChange={(e) => this.changeCarsValueP(e.target.value, 1)} />
    render() {
        return (
            <div>

            
{/* <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
  <div class="input-group-append">
    <button type="button" class="btn btn-outline-secondary">Action</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div> */}

                <form>
             
                    <input className="input-d form-control"
                        name="city" type="text" defaultValue={this.props.deleted ? null : this.props.city[this.props.idx].name}
                        onChange={(e) => this.props.inputChange(e.target.value)}
                  />
                  
                    <button className= {this.props.show ? 'show btn-del' : 'hidden'} onClick={(e) => this.props.deleteItem(e)} >x</button>
                    {console.log(this.props.idx, "index city")}
                    {console.log(this.props.deleted, "delete status")}
                </form>

              
            </div>
        )
    }
}

export default Input