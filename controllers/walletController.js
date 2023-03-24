const{Wallet: WalletModel} = require("../models/Wallet");

const walletController = {
    create:async (req, res) => {
        try {
            console.log("aaa",req.body);
            const wallet = {
                value_gained: req?.body?.value_gained,
                value_lost: req?.body?.value_lost,
            };
            console.log("wallet",wallet);

            const response = await WalletModel.create(wallet);

            res.status(201).json({response,msg:"Carteira criada com sucesso!"});
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = walletController;