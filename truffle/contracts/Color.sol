// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Color is ERC721 {
    string[] public mintedColors;
    mapping(string => bool) _colorExists;

    constructor() ERC721("Unique Colors", "UCO") {}

    function mint(string memory _color) public {
        mintedColors.push(_color);
        uint _id = mintedColors.length - 1;
        _mint(msg.sender, _id);
        _colorExists[_color] = true;
    }
}
