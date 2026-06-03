// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title PaymentProcessor
/// @notice Simple USDC payment processor example for Arc
interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function transfer(address to, uint256 amount) external returns (bool);
}

contract PaymentProcessor {
    address public usdc;
    event PaymentProcessed(address indexed payer, address indexed recipient, uint256 amount);

    constructor(address _usdc) {
        usdc = _usdc;
    }

    function processPayment(address recipient, uint256 amount) external {
        require(IERC20(usdc).transferFrom(msg.sender, recipient, amount), "Transfer failed");
        emit PaymentProcessed(msg.sender, recipient, amount);
    }
}