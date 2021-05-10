const Color = artifacts.require('Color');

contract('Color NFT', ([someUser]) => {
    let aColor;

    beforeEach(async () => {
        aColor = await Color.new();
    });

    it('A color can be created', async () => {
        assert.isNotNull(aColor.address);
        assert.isAtLeast(aColor.address.length, 40);
    });

    it('Has a name', async () => {
        const name = await aColor.name();
        assert.equal(name, "Unique Colors");
    });
});