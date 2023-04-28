import paytmchecksum from '../paytm/PaytmChecksum.js'
import { paytmParams, paytmMerchantKey } from '../index.js'

export const addPaymentGateway = async (req, res) => {
    try {
        let PaytmChecksum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey)

        let params = {
            ...paytmParams, '   CHECKSUMHASH': PaytmChecksum
        }

        res.status(200).json(params)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}