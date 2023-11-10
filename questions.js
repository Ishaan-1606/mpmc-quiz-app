let questions=[
    {
        numb:1,
        question:"8051 series has how many 16 bit registers?",
        answer:"(a) 2",
        options:[
            "(a) 2",
            "(b) 3",
            "(c) 1",
            "(d) 0",
        ]
    },
    {
        numb:2,
        question:"How many bytes of bit addressable memory is present in 8051 based microcontrollers?",
        answer:"(c) 16 bytes",
        options:[
            "(a) 8 bytes",
            "(b) 32 bytes",
            "(c) 16 bytes",
            "(d) 128 bytes"
        ]
    },
    {
        numb:3,
        question:")8051 can access up to_____ of program memory and _____of external data",
        answer:"(c) 64 KB, 64 KB",
        options:[
            "(a) 64 KB, 32 KB",
            "(b) 32 KB, 64 KB",
            "(c) 64 KB, 64 KB",
            "(d) 16 KB, 64 KB"
        ]
    },    
    {
        numb:4,
        question:"The function of ALE signal in 8051 microcontroller is",
        answer:"(b) To control demultiplexing the address and data bus.",
        options:[
            "(a) To extend the memory capacity",
            "(b) To control demultiplexing the address and data bus.",
            "(c) To distinguish between external RAM and PROM",
            "(d) To initialize parallel port"
        ]
    },    
    {
        numb:5,
        question:"Which of the following comes under the indexed addressing mode?",
        answer:"(d) MOVC @A+DPTR,A",
        options:[
            "(a) MOVX A,@DPTR",
            "(b) MOV @R0,A",
            "(c) MOV A,R0",
            "(d) MOVC @A+DPTR,A"
        ]
    },
    {
        numb: 6,
        question: "The interrupt service routine always ends with the return (RET) instruction, and the execution of the RET instruction results in?",
        answer: "(b) POP the current stack top to PCW",
        options: [
            "(a) POP the current stack top to PC",
            "(b) POP the current stack top to PCW",
            "(c) Both a and b",
            "(d) None of the above"
        ]
    },
    {
        numb: 7,
        question: "For writing commands on an LCD, RS bit is?",
        answer: "b) reset",
        options: [
            "a) set",
            "b) reset",
            "c) set & reset",
            "d) none of the mentioned"
        ]
    },
    {
        numb: 8,
        question: "What is the file extension used to load in a microcontroller to execute an instruction?",
        answer: "(d) .hex",
        options: [
            "(a) .doc",
            "(b) .c",
            "(c) .txt",
            "(d) .hex"
        ]
    },
    {
        numb: 9,
        question: "What is the time taken by one machine cycle if crystal frequency is 20MHz?",
        answer: "(b) 0.60 micro seconds",
        options: [
            "(a) 1.085 micro seconds",
            "(b) 0.60 micro seconds",
            "(c) 0.75 micro seconds",
            "(d) 1 micro seconds"
        ]
    },
    {
        numb: 10,
        question: "A microcontroller at least should consist of",
        answer: "(c) CPU, RAM, ROM, I/O ports, and timers",
        options: [
            "(a) RAM, ROM, I/O ports, and timers",
            "(b) CPU, RAM, I/O ports, and timers",
            "(c) CPU, RAM, ROM, I/O ports, and timers",
            "(d) CPU, ROM, I/O ports, and timers"
        ]
    },
    {
        numb: 11,
        question: "Signal conditioning interfaces are used to ____ the signal from a sensor before it is input to a microcontroller.",
        answer: "(d) All of the above",
        options: [
            "(a) Amplify",
            "(b) Filter",
            "(c) Convert from analog to digital",
            "(d) All of the above"
        ]
    },
    {
        numb: 12,
        question: "The LCD data pins are connected to the 8051 microcontroller's ____ port.",
        answer: "(d) P3",
        options: [
            "(a) P0",
            "(b) P1",
            "(c) P2",
            "(d) P3"
        ]
    },
    {
        numb: 13,
        question: "The 8051 microcontroller can interface with an LCD using the ____ mode or the ____ mode.",
        answer: "(a) 4-bit, 8-bit",
        options: [
            "(a) 4-bit, 8-bit",
            "(b) Serial, parallel",
            "(c) Static, dynamic",
            "(d) Reflective, transmissive"
        ]
    },
    {
        numb: 14,
        question: "The interrupt flag bits are located in the ____ register.",
        answer: "(a) IE",
        options: [
            "(a) IE",
            "(b) IP",
            "(c) PSW",
            "(d) TCON"
        ]
    },
    {
        numb: 15,
        question: "The 8051 microcontroller has ____ interrupt sources.",
        answer: "(c) 10",
        options: [
            "(a) 5",
            "(b) 6",
            "(c) 10",
            "(d) 16"
        ]
    },
    {
        numb: 16,
        question: "The serial data is transmitted on the ____ pin, and the serial data is received on the ____ pin.",
        answer: "(a) TXD, RXD",
        options: [
            "(a) TXD, RXD",
            "(b) RXD, TXD",
            "(c) SCK, SDI",
            "(d) MOSI, MISO"
        ]
    },
    {
        numb: 17,
        question: "The baud rate of the serial port can be configured using the ____ register.",
        answer: "(c) TH1",
        options: [
            "(a) SCON",
            "(b) TMOD",
            "(c) TH1",
            "(d) PCON"
        ]
    },
    {
        numb: 18,
        question: "The serial communication mode used by the 8051 microcontroller is ____.",
        answer: "(a) Asynchronous",
        options: [
            "(a) Asynchronous",
            "(b) Synchronous",
            "(c) Half-duplex",
            "(d) Full-duplex"
        ]
    },
    {
        numb: 19,
        question: "What is the purpose of the PSW register in the 8051 microcontroller?",
        answer: "(d) To store the program status word (PSW)",
        options: [
            "(a) To store the program counter (PC)",
            "(b) To store data",
            "(c) To store the stack pointer (SP)",
            "(d) To store the program status word (PSW)"
        ]
    },
    {
        numb: 20,
        question: "Which instruction in the 8051 microcontroller is used to return from a subroutine?",
        answer: "(a) RET",
        options: [
            "(a) RET",
            "(b) CALL addr",
            "(c) JMP addr",
            "(d) AJMP addr"
        ]
    },
    {
        numb: 21,
        question: "Which instruction in the 8051 microcontroller is used to call a subroutine?",
        answer: "(c) CALL addr",
        options: [
            "(a) LJMP addr",
            "(b) AJMP addr",
            "(c) CALL addr",
            "(d) JZ addr"
        ]
    },
    {
        numb: 22,
        question: "Which instruction in the 8051 microcontroller is used to jump to a specific memory location if the accumulator is zero?",
        answer: "(d) JZ addr",
        options: [
            "(a) LJMP addr",
            "(b) AJMP addr",
            "(c) CALL addr",
            "(d) JZ addr"
        ]
    },
    {
        numb: 23,
        question: "Which instruction in the 8051 microcontroller is used to jump to a specific memory location?",
        answer: "(a) LJMP addr",
        options: [
            "(a) LJMP addr",
            "(b) AJMP addr",
            "(c) CALL addr",
            "(d) JZ addr"
        ]
    },
    {
        numb: 24,
        question: "Which instruction in the 8051 microcontroller is used to decrement the value of a register?",
        answer: "(d) DEC A",
        options: [
            "(a) ADD A, B",
            "(b) SUB A, B",
            "(c) MOV A, B",
            "(d) DEC A"
        ]
    },
    {
        numb: 25,
        question: "Which of the following commands are used for addressing the off-chip data and associated codes respectively by data pointer?",
        answer: "(d) MOVX & MOVC",
        options: [
            "(a) MOCC & MOVY",
            "(b) MOVY & MOVB",
            "(c) MOVZ & MOVA",
            "(d) MOVX & MOVC"
        ]
    },
    {
        numb: 26,
        question: "DJNZ defines _____ the operand and it jumps to the system.",
        answer: "(b) Decrement",
        options: [
            "(a) Increment",
            "(b) Decrement",
            "(c) Move",
            "(d) Add"
        ]
    },
    {
        numb: 27,
        question: "When the 8051 is reset and the EA line is LOW, the program counter points to the first program instruction in the:",
        answer: "(a) internal code memory",
        options: [
            "(a) internal code memory",
            "(b) external code memory",
            "(c) internal data memory",
            "(d) external data memory"
        ]
    },
    {
        numb: 28,
        question: "MOV A, @ R1 will:",
        answer: "(c) Copy the contents of memory whose address is in R1 to the accumulator",
        options: [
            "(a) Copy R1 to the accumulator",
            "(b) Copy the accumulator to R1",
            "(c) Copy the contents of memory whose address is in R1 to the accumulator",
            "(d) Copy the accumulator to the contents of memory whose address is in R1"
        ]
    },
    {
        numb: 29,
        question: "Which of the following instruction divides a 32-bit number by a 16-bit number?",
        answer: "(a) DIV BX",
        options: [
            "(a) DIV BX",
            "(b) DIV BL",
            "(c) DIV DX:AX, BX",
            "(d) None of the above"
        ]
    },
    {
        numb: 30,
        question: "Which is incorrect?",
        answer: "(a) MOV [1234h], [4567h]",
        options: [
            "(a) MOV [1234h], [4567h]",
            "(b) MOV [BX], AX]",
            "(c) MOV [1234h], 4567h",
            "(d) MOV BX, [1234h]"
        ]
    },
    {
        numb: 31,
        question: "Which of the following instruction is not valid?",
        answer: "(b) MOV DS, 5000H",
        options: [
            "(a) MOV AX, BX",
            "(b) MOV DS, 5000H",
            "(c) MOV AX, 5000H",
            "(d) PUSH AX"
        ]
    },
    {
        numb: 32,
        question: "The register that provides control and status information about counters is",
        answer: "(b) TMOD",
        options: [
            "(a) IP",
            "(b) TMOD",
            "(c) TCON",
            "(d) PCON"
        ]
    },
    {
        numb: 33,
        question: "PSEN is pin no ....... of 8051",
        answer: "(a) 29",
        options: [
            "(a) 29",
            "(b) 30",
            "(c) 31",
            "(d) 32"
        ]
    },
    {
        numb: 34,
        question: "Vcc is pin no ............... in 8051",
        answer: "(d) 40",
        options: [
            "(a) 15",
            "(b) 20",
            "(c) 25",
            "(d) 40"
        ]
    },
    {
        numb: 35,
        question: "8051 has ______no of I/O pins",
        answer: "(b) 4",
        options: [
            "(a) 2",
            "(b) 4",
            "(c) 8",
            "(d) 6"
        ]
    },
    {
        numb: 36,
        question: "8051 has ........... no. of timers",
        answer: "(b) 2",
        options: [
            "(a) 1",
            "(b) 2",
            "(c) 3",
            "(d) 4"
        ]
    },
    
]
