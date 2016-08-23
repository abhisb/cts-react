

// Product - comp

const Product = React.createClass({
    handleUpVote: function () {
        this.props.onVote(this.props.id);
    },
    render: function () {
        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-md-2 col-sm-2">
                        <img src={this.props.product_image_url} width="100px" className="img-responsive"/>
                    </div> 
                    <div className="col-md-1 col-sm-1">
                        <a onClick={this.handleUpVote}>
                            <span className="glyphicon glyphicon-chevron-up"></span>
                        </a>
                        {this.props.votes}
                    </div>    
                    <div className="col-md-9 col-sm-9">    
                        <div>
                            <a href={this.props.url}>
                                {this.props.title}
                            </a>    
                        </div> 
                        <div>
                            <span>Submitted by: </span>
                            <img src={this.props.submitter_avatar_url} width="30px" className="img-responsive"/>
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
});


// ProductList - comp

const ProductList = React.createClass({

    getInitialState: function () {
        return { products:[]};
    },

    componentDidMount: function () {
        this.updateState();
    },  
    updateState: function () {
        const products = Data.sort((a, b) => { return b.votes - a.votes }); // load products
        this.setState({products:products});
    },
    handleProductUpVote: function (productId) {
        Data.forEach((el) => { 
            if (el.id === productId) {
                el.votes = el.votes + 1;
            }
        }); 
        this.updateState();
    },    

    render: function () {
        //const product = Data[0];
        const products = this.state.products.map((product) => { 
            return (
                <Product
                    key={'product-'+product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitter_avatar_url={product.submitter_avatar_url}
                    product_image_url={product.product_image_url}
                    onVote={this.handleProductUpVote}
                />
            );
        });
        return (
            <div className="list-group">
                {products}
            </div>
        );
    }
});


ReactDOM.render(<ProductList /> , document.getElementById('root'));