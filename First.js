// ********** How does javascript works behind the scene **********

/*
 ------------------ Javascript Execution context -------------------
#how to run and execute.

  # code ---> global EC(execution context) put into ---> 'this'

  # execution type:
        1. Global Execution Context / Global environment 
        2. Function Execution Context
        3. Eval Execution Context
            --> eval is object of global execution context.

  # execution phase:
        1. Memory Creation Phase / creation phase
        2. Execution Phase

    => creation phase: only allocate storage at memory for variable
    => execution phase: all processes doing at this

  # js ---> single threaded
*/ 


/*
1.  let val1 = 10
2.  let val2 = 5
3.  function addNum(num1, num2) {
4.      let total = num1 + num2
5.      return total
6.  }
7.  let result1 = addNum(val1, val2)
8.  let result2 = addNum(10, 2)
*/

/*
 # All steps:
    1. global execution / environment ---> 'this' alocation
    2. memory phase ---> 
                        1. val1 --> undefined
                        2. val2 --> undefined
                        3. addNum --> defination
                        7. result1 --> undefined
                        8. result2 --> undefined
    3. Execution phase --->
                        1. val1 <-- 10
                        2. val2 <-- 5
                        3. addNum <-- new execution context
                                    --> new variable environment + execution thread 
                                        memory phase: 
                                                    num1 --> undefined
                                                    num2 --> undefined
                                                    total --> undefined                
                                                    --> then total return the value to global execution context
                                                    --> then it delete. just like stack call
                        7. result1 <-- 15
                        8. result2 <-- 12 (before result getting, again works phase 3)

 # to understant call stack(memory): goto inspect --> source --> breakpoint --> call stack
*/          