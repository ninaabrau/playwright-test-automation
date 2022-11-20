import { test, expect } from '@playwright/test'

test.describe.parallel("API Testing", () => {

    const baseUrl = 'https://api.tmsandbox.co.nz/v1/'
    
    test('Test api response Name', async ({ request }) => {
        const response = await request.get(`${baseUrl}/Categories/6327/Details.json?catalogue=false`)
        expect(response.status()).toBe(200)
    
        const responseBody = JSON.parse(await response.text())

        //Assert NAME should be "Carbon credits"
        expect(responseBody.Name).toBe('Carbon credits')
      })

    test('Test api response - canRelist', async ({ request }) => {
        const response = await request.get(`${baseUrl}/Categories/6327/Details.json?catalogue=false`)
        expect(response.status()).toBe(200)
    
        const responseBody = JSON.parse(await response.text())

        //Assert CanRelist should be true
        expect(responseBody.CanRelist).toBe(true)
      })

    test('Test api response Promotions', async ({ request }) => {
        const response = await request.get(`${baseUrl}/Categories/6327/Details.json?catalogue=false`)
        expect(response.status()).toBe(200)
    
        const responseBody = JSON.parse(await response.text())

        //Assert Promotion Gallery should have description "Good position in category"
        const promotions = responseBody.Promotions
        for(let i=0; i<promotions.length; i++ ){
         if(promotions[i].Name == 'Gallery'){
           expect(promotions[i].Description).toContain('Good position in category')
         }
        }
      })
})