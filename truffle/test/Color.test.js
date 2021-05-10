const Color = artifacts.require('Color');

contract('Color NFT', ([someUser]) => {
    it('A color can be created', async() => {
        const aColor = await Color.new();
        assert.isNotNull(aColor.address);
        assert.isAtLeast(aColor.address.length, 40);
    });
});