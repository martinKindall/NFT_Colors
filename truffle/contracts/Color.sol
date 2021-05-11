// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract Color is ERC721Enumerable  {
    string[] public mintedColors;
    mapping(string => bool) _colorExists;

    constructor() ERC721 ("Unique Colors", "UCO") {}

    function mint(string memory _color) public {
        require(!_colorExists[_color], 'Color already exists!');

        mintedColors.push(_color);
        uint _id = mintedColors.length - 1;
        _mint(msg.sender, _id);
        _colorExists[_color] = true;
    }

    function getMintedColors() public view returns (string[] memory) {
        return mintedColors;
    }
}
