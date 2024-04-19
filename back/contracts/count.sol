// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Count {
    
    uint public count = 1;

    function get() public view returns(uint){
        return count;
    }

    function inc() public {
        count += 1;
    }

    function decr() public {
        count -= 1;
    }
}
