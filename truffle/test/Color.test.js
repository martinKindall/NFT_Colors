const Color = artifacts.require('Color');

contract('Color NFT', ([someUser, otherUser]) => {
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

    it('Color can be minted', async () => {
        const balance0 = await aColor.balanceOf(someUser);
        const totalSupply0 = await aColor.totalSupply();
        assert.equal(totalSupply0, 0);
        assert.equal(Number(balance0), 0);
        const result = await aColor.mint('somecolor', {from: someUser});
        const balance1 = await aColor.balanceOf(someUser);
        assert.isAbove(Number(balance1), 0);
        const totalSupply = await aColor.totalSupply();
        assert.equal(totalSupply, 1);
        const tokenReceiver = result.receipt.from;
        assert.equal(tokenReceiver, someUser.toLowerCase());
    });

    it('Color exists already', async () => {
        await aColor.mint('somecolor', {from: someUser});
        try {
            await aColor.mint('somecolor', {from: someUser});
        } catch(err) {
            assert.equal(
                err.reason, 
                'Color already exists!'
            );
        }
    });
});