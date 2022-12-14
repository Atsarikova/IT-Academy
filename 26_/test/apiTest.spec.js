const axios = require('axios');
const alphaVintageQuery = require("../testData/alphaVintageQuery.v1.json");
const Validator = require("jsonschema").Validator;
const validator = new Validator();
const sendHttpRequest = require("../sendHttpRequest");
const imageJsonschema = require("../testData/imageJsonschema.json");
const bravenewcoinSchema = require("../testData/bravenenewcoinSchema.json");





describe('Search API tests', function()  {
    
        test('check status code', async() => {
            const response = await axios.get('https://alpha-vantage.p.rapidapi.com/query',{
            params: {
                interval: '5min',
                function: 'TIME_SERIES_INTRADAY',
                symbol: 'MSFT',
                datatype: 'json',
                output_size: 'compact'
              },
              headers: {
                'X-RapidAPI-Key': 'ced8b99b79msh4409f258f268e52p1d794ajsn017f4945102f',
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
              }
                
            })
            console.log(response)
            expect(response.status).toEqual(200);
            
        })
    })
    
        test('check body', async() => {
            const response = await axios.get('https://alpha-vantage.p.rapidapi.com/query',{
            params: {
                interval: '5min',
                function: 'TIME_SERIES_INTRADAY',
                symbol: 'MSFT',
                datatype: 'json',
                output_size: 'compact'
              },
              headers: {
                'X-RapidAPI-Key': 'ced8b99b79msh4409f258f268e52p1d794ajsn017f4945102f',
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
              }
                
            })
            const result = await validator.validate(response.data, alphaVintageQuery)
            console.log(result)
            expect().toEqual();
            expect(result.valid).toEqual(true);
            
        })



describe('Search API tests', () => {

    let response;

    test('check status code', async() => {
        const conf = {
            url:'https://bravenewcoin.p.rapidapi.com/ohlcv' ,
            params: {size: '10'},
            headers: {
              Authorization: 'Bearer <append token here>',
              'X-RapidAPI-Key': 'ced8b99b79msh4409f258f268e52p1d794ajsn017f4945102f',
              'X-RapidAPI-Host': 'bravenewcoin.p.rapidapi.com'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response)
        expect(response.status).toEqual(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    })
})

test('validate json schema', async() => {
    const conf = {
        url:'https://bravenewcoin.p.rapidapi.com/ohlcv' ,
        params: {size: '10'},
            headers: {
              Authorization: 'Bearer <append token here>',
              'X-RapidAPI-Key': 'ced8b99b79msh4409f258f268e52p1d794ajsn017f4945102f',
              'X-RapidAPI-Host': 'bravenewcoin.p.rapidapi.com'
        }
    }
    response = await sendHttpRequest(conf);
    console.log(response);
            expect(response.valid).toEqual();
});


describe('Search API tests', () => {

    let response;

    test('check status code', async() => {
        const conf = {
            url:'https://bravenewcoin.p.rapidapi.com/market-cap' ,
            params: {assetId: '<REQUIRED>'},
            headers: {
            Authorization: 'Bearer <append token here>',
            'X-RapidAPI-Key': 'ced8b99b79msh4409f258f268e52p1d794ajsn017f4945102f',
            'X-RapidAPI-Host': 'bravenewcoin.p.rapidapi.com'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response)
        expect(response.status).toEqual(429);
       
    })
})

    
describe('Search API tests', () => {

    let response;

    test('check status code', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/image/q=tesla',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidStatusCode(200);
    })
})


    test('validate json schema', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/image/q=tesla',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidSchema(imageJsonschema);
    })
