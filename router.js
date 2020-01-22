const router = require('express').Router();

const Accounts = require('./data/helpers/accounts-helper')

router.get('/', (req, res)=>{
    Accounts.getAll()
        .then(accountsList=>{
            res.status(200).json({accountsList})
        })
        .catch(()=>{
            res.status(500).json({errorMessage: 'Failed to get account list'})
        })
})

router.get('/:id', (req, res)=>{
    Accounts.getById(req.params.id)
        .then(account => {
            res.status(200).json({account})
        })
        .catch(()=>{
            res.status(500).json({errorMessage: 'failed to get that account'})
        })
})

router.post('/', (req, res)=>{
    Accounts.create(req.body)
        .then(newAccount=>{
            res.status(201).json({newAccount})
        })
        .catch(()=>{
            res.status(500).json({errorMessage: 'failed to create new account'})
        })
})

router.put('/:id', (req, res)=>{
    Accounts.update(req.params.id, req.body)
        .then(updated=>{
            res.status(201).json({updated})
        })
        .catch(()=>{
            res.status(500).json({errorMessage: 'failed to update that account'})
        })
})

router.delete('/:id', (req, res)=>{
    Accounts.remove(req.params.id)
        .then(removed=>{
            res.status(200).json({removed})
        })
        .catch(()=>{
            res.status(500).json({errorMessage: 'failed to delete that account'})
        })
})

module.exports = router