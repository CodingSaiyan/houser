

module.exports = {
    getHouses: (req, res) => {
        let db = req.app.get('db')

        db.get_houses().then( response => {
            res.status(200).send(response)
        }).catch(err => {
            console.log("there was an error and you didn't get any houses", err)
        })
    },

    addHouse: (req, res) => {
        let db = req.app.get('db')
        let { name, address, city, state, zip } = req.body;
        // console.log('body', req.body);

        db.add_house(name, address, city, state, zip).then( response => {
            console.log(111111, response);
            res.status(200).send(response)
        }).catch(err => {
            console.log(err)
        })

    },

    deleteHouse: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params;

        db.delete_house({id}).then(response => {
            res.status(200).send(response);
        }).catch(err => {console.log(`You didn't delete a single thing! ${err}`)})
    }
}