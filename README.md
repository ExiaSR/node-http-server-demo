# TCP Protocol

## The Basic

### File Descriptor

- Eveything is a file (Unix philosophy)
- Basic operations: read, write, open, and close

### Socket API

- A form of file descriptor
- Using network protocol to communicate between processes
- Connection between $localAddress:$localPort and $remoteAddress:$remotePort
- Transmitting data between two clients

### TCP Protocol

- Using socket API to establish connection and trasmit data between two clients

### HTTP Protocol

Learn more at https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

- Build on top of the TCP protocol
