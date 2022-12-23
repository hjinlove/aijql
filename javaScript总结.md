[toc]

***

#     一、 javascript简介

## 1.1 基本概念

1. javascript主要用向HTML页面中添加交互行为。
2. JavaScript是一种脚本语言，语法和C语言类似，属于弱类语言。
3. JavaScript一般用于编写客户端脚本。
4. Javascript是一种解释型语言

## 1.2 javascript的组成

JavaScript由三部分组成：![](C:\Users\86152\Pictures\Camera Roll\JavaScript组成.png)

### 1.2.1ECMAScrpit标准

它是一种开放的、国际上广为接受的、标准的脚本语言规范。不与任何具体的浏览器绑定。

标准主要描述由：语法、变量和数据类型、运算符、逻辑控制语句、关键字.保留字、对象。

### 1.2.2BOM浏览器对象模型

他提供了独立与内容与浏览器窗口进行交互对象，可以实现与HTML文档的交互。

### 1.2.3DOM文档对象模型

它是HTML文档对象模型（HTMLDOM）定义的一套标准方法，用来访问和操作HTML文档。

# ECMAScrpit标准

## 1.3JavaScript的引入三种方式

### 1.3.1.通过`<script>`标签嵌入

通过`<script>`标签嵌入JavaScript代码时，必须放在标签里面

```
<script type="text/javaScript">
	输入js代码
</script>
```



### 1.3.2.引入外部文件（常用）

外部脚本很实用，如果相同的脚本被用于许多不同的网页。

JavaScript 文件的文件扩展名是 *.js*。

如需使用外部脚本，请在 `<script>` 标签的 `src` (source) 属性中设置脚本的名称：

实例

```
<script src="js文件路径"></script>
```

### 1.3.3.在HTML属性中直接引入

## 1.4基本语法

### 语句

> var a=1+3;
>
> 这条语句先用var关键词，在声明一个变量a，然后将1+3的运算结果赋值给变量a

### 标识符

它是指变量、函数、属性的名字

标识符规则如下

1. 第一个字符必须是字母、下划线(_)或美元符号($)，后面字符可以是字母、数字或下划线、美元符号；
2. 不能包含空格、加号、减号等符号；
3. 不能和JavaScript中的关键字和保留字同名；

### 关键字

|     break 立即退出循环     |  case  |               catch                |  continue，退出当前循环  | debugger，停止执行语句并调用函数 |
| :------------------------: | :----: | :--------------------------------: | :----------------------: | :------------------------------: |
|          default           | delete |                 do                 | else，规定要执行的代码块 |              false               |
|          finally           |  for   | function，构造函数和定义函数直接量 |            if            |                in                |
|         instanceof         |  new   |                null                |          return          |              switch              |
| this，通过构造函数创建对象 | throw  |                true                |           try            |              typeof              |
|       var，声明变量        |  void  |               while                |      with，引用对象      |                                  |

### 保留字

| abstract |   boolean    |  byte  |    char    |  class   |
| :------: | :----------: | :----: | :--------: | :------: |
|  const   |    double    |  enum  |   export   | extends  |
|  final   |    float     |  goto  | implements |  import  |
|   int    |  interface   |  long  |   native   | package  |
| private  |  protected   | public |   short    |  static  |
|  super   | synchronized | throws | transient  | volatile |

# 二、变量

## 2.1.变量的声明与赋值

- 变量是使用关键词var声明

​         eg：var 变量名；

- 2.在声明变量的同时，也可以赋值

> ​    在声明变量x的同时，将数值10赋给了变量x
>
> ​    eg：var x =10；

- 一个关键词可以同时声明多个变量，但是必须用英文“，”隔开

> eg：声明变量为name、age、gender，分别表示姓名、年龄、性别
>
> var  name, age, gender;

- 也可以在声明变量的同时，在对变量进行赋值

> eg：var  name="小明",
>
> ​        var  age=18,
>
> ​        var  gender="男";

## 2.2使用console查看变量存储值



|       方法       |                             描述                             |
| :--------------: | :----------------------------------------------------------: |
|     assert()     |        如果断言为法拉瑟，则在信息到控制台输出错误信息        |
|     clear()      |                      清除控制台上的信息                      |
|     count()      |              记录count()调用次数，一般用于计数               |
|     error()      |                     输出错误信息到控制台                     |
|     group()      | 在控制台创建一个信息分组。一个完整的信息分组以   console.group()开始，                  console.groupEnd()  结束。 |
| groupCollapsed() | 在控制台创建一个信息分组。类似console.group()，但它默认是折叠的。 |
|    groupEnd()    |                     设置当前信息分组结束                     |
|      imfo()      |                      控制台输出一条信息                      |
|      log()       |                      控制台输出一条信息                      |
|     table()      |                      以表格形式显示数据                      |
|      time()      | 计时器，开始计时间，与timeEnd()联合使用，用于算出一个操作所花费的准确时间。 |
|    timeEnd()     |                           计时结束                           |
|     trace()      |                                                              |
|      warn()      |                                                              |

## 2.3数据类型

- 五种基本数据类型

- | 简单数据类型 |                      说明                       |        默认值         |
  | :----------: | :---------------------------------------------: | :-------------------: |
  |  Undefined   | var a; 声明了变量a但是没有赋值，此时a=undefined | undefined（未定义的） |
  |     Null     |         var a = null;声明了变量a为空值          |         null          |
  |    string    |              字符串类型，如“张三”               |          “”           |
  |    Number    |    数字型，包含整型值和浮点型值，如21，0.21     |           0           |
  |   Boolean    |     布尔值类型，如true，false ，等价于1和0      |         false         |

### 2.3.1.Undefined类型

- Undefined类型只有一个值
- var str;
- alert(str);   //Undefined

``它相当于var str =Undefined；`

### 2.3.2.Null类型

1. 在 JavaScript 中 **null **表示 "什么都没有"。**null**是一个只有一个值的特殊类型。表示一个空对象引用。
2. 在 JavaScript 中, **undefined** 是一个没有设置值的变量。**typeof** 一个没有值的变量会返回 **undefined**。

### 2.3.3.String字符串类型

字符串可以由英文**" "**或者英文**' '**来表示

```javascript
var str = "年龄";
var str = '年龄';
```

1.**字符串的特点**



2.**字符串转换**

### 2.3.4.Number数字型类型

Number 类型用来表示整数和浮点数，最常用的功能就是用来表示10进制的整数和浮点数。

Number表示的数字大小是有限的，如果超过了这个范围，则会返回 ±Infinity。

- 最大值：+1.7976931348623157e+308

- 最小值：-1.7976931348623157e+308

- 0以上的最小值：5e-324

  **特殊的数字：**

  - Infinity：正无穷
  - -Infinity：负无穷
  - NaN：非法数字（Not A Number）

  **其它的进制：**

  - 二进制：0b 开头表示二进制，但是，并不是所有的浏览器都支持
  - 八进制：0 开头表示八进制
  - 十六进制：0x 开头表示十六进制

  > 注意：使用typeof检查一个Number类型的数据时（包括NaN 和 Infinity），会返回"number"。

### 2..3.5.Boolean布尔值类型

布尔型也被称为逻辑值类型或者真假值类型。

布尔型只能够取真（true）和假（false）两种数值。除此以外， 其它的值都不被支持。

### 2.3.6typeof操作符

```javascript
var num1 = "18";
var num2 = 18;
var num3 = null;
var num4;
var num5 = true;
var num6 = "a"-1;
console.log(typeof(num1)); // 结果 string
console.log(typeof(num2)); // 结果 number
console.log(typeof(num3)); // 结果 object
console.log(typeof(num4)); // 结果 nudefined
console.log(typeof(num5)); // 结果 boolean
console.log(typeof(num6)); // 结果 number
```

|     类型      |      列       |   结果    |
| :-----------: | :-----------: | :-------: |
| string字符串  | typeof(num1); |  number   |
|  number数字   | typeof(num2); |  number   |
|    object     | typeof(num3); |  object   |
|   nudefined   | typeof(num4); | nudefined |
| boolean布尔值 | typeof(num3); |  boolean  |



# 三、运算符



## 3.2算术运算符

五种算术运算符：

| 运算符 |      描述      |        实例         |
| :----: | :------------: | :-----------------: |
|   +    |       加       |      10+20=30       |
|   -    |       减       |      10-20=10       |
|   *    |       乘       |      10*20=200      |
|   /    |       除       |      10/20=0.5      |
|   %    | 求模（取余数） | 返回出发的余数9%2=1 |



## 3.3一元运算符

> **总结**
>
> **前置++：先加1，后参与运算**
> **后置++：先参与运算，后加1**
>
> **上面两个理解后，下面两个自通**
> **前置-- ：先减1，后参与运算**
> **后置-- ：先参与运算，后减1**

1.**运算符前置++**

```javascript
        var i = 1;
        var str = ++i;
        console.log(str); //结果：2
```

2.**运算符后置++**

```javascript
        var i = 1;
        var str = i++;
        console.log(str); //结果：1
```

## 3.4比较运算符

> 比较运算符是**两个数据进行比较时所使用的运算符**，比较运算后，会**返回一个布尔值**(true(表示真的) / false(表示假的))作为比较运算的结果。
>

| 运算符 |   说明   | 案例 | 结果  |
| :----: | :------: | :--: | :---: |
|   <    |   小于   | 1<2  | true  |
|   >    |   大于   | 1>2  | false |
|   <=   | 小于等于 | 1<=2 | true  |
|   >=   | 大于等于 |      |       |
|   ==   |   相等   |      | true  |
|   !=   |  不相等  |      |       |
|  ===   |   全等   |      | true  |
|  !==   |  不全等  |      |       |

## 3.5逻辑运算符

逻辑运算符是用来进行布尔值运算的运算符，其返回值也是布尔值

| 逻辑运算符 |          说明          |      案例       |
| :--------: | :--------------------: | :-------------: |
|     &&     | “逻辑与”，简称"与" and |  true && false  |
|    \|\|    | “逻辑或”，简称"或" or  | true \|\| false |
|     !      | “逻辑非”，简称"非" not |     ！true      |

### 3.5.1逻辑非(!)

> 逻辑非遵循的规则
>
> 如果操作是**对象、非空字符串、任意非0数值（包括Infinity）**，则返回**false**
>
> 如果操作是**空字符串、数值0、null、NaN、undefined**，  则返回**true**

```javascript
        var a = false;
        var b = "false";
        var c = 0;
        var d = "";
        var e = NaN;
        var f = 88;
        var g = '';
        document.write(!a + "<br>");  //返回true
        document.write(!b + "<br>");  //返回false
        document.write(!c + "<br>");  //返回true
        document.write(!d + "<br>");  //返回true
        document.write(!e + "<br>");  //返回true
        document.write(!f + "<br>");  //返回false
        document.write(!g + "<br>");  //返回true
```



### 3.5.2逻辑与(&&)

> 两边都是 true才返回 true，否则返回 false
>
> - 语法：表达式1 && 表达式2
> - 如果第一个表达式的值为真，则返回表达式2
> - 如果第一个表达式的值为假，则返回表达式1

![](C:\Users\86152\Pictures\Screenshots\逻辑与.png)

```javascript
 <script>
        var a = undefined && 1;  //true && false
        var b = "hello" && 0;   //false && true
        var c = 12 && null;    //false && true
        var d = "" && 0;     //true && true
        console.log(a);     //返回undefined
        console.log(b);    //返回0
        console.log(c);   //返回null
        console.log(d);  //返回""
</script>
```



### 3.5.3逻辑或(||)

两边都为 false 才返回 false，否则都为true

- 语法：表达式1 || 表达式2
- 如果第一个表达式的值为真，则返回表达式1
- 如果第一个表达式的值为假，则返回表达式2

![逻辑或](C:\Users\86152\Pictures\Screenshots\逻辑或.png)

```javascript
    <script>
        var a = undefined || 1;  //true && false
        var b = "hello" || 0;  //false && true
        var c = 12 || null;  //false && true
        var d = "" || 0;  //true && true
        console.log(a);  //返回1
        console.log(b);  //返回hello
        console.log(c);  //返回12
        console.log(d);  //返回0
    </script>
```



## 3.6赋值运算符

概念：用来把数据赋值给变量的运算符

| 赋值运算符 |         说明         |            案例             |
| :--------: | :------------------: | :-------------------------: |
|     =      |       直接赋值       |   var usrName = ‘我是值’    |
|  += ，-=   | 加，减一个数后再赋值 | var age = 10； age+=5；//15 |
| *=，/=，%= | 成，除，取模后再赋值 |  var age = 2; age*=5; //10  |

```javascript
var age = 10;
age += 5;  // 相当于 age = age + 5;
age -= 5;  // 相当于 age = age - 5;
age *= 10; // 相当于 age = age * 10;
        
```



## 3.7条件运算符

> **三元运算符**
>
> 表达式1 ? 表达式2 : 表达式3（是对if……else语句的一种简化写法）
>
> **result=表达式1 ? 表达式2 : 表达式3;**
>
> ```javascript
>  // 条件运算符（三元运算符）:
>         // 表达式1 ? 表达式2 : 表达式3（是对if……else语句的一种简化写法）
>         //显示成年还是未成年
>         var age = 21;
>         var result2 = age >= 18 ? "成年了" : "未成年";
>         console.log(result2);
> ```

## 3.8运算符优先级

|            运算符             |            描述            | 优先级 |
| :---------------------------: | :------------------------: | :----: |
|         ++ 、 –  、！         |     一元运算符、逻辑非     |   1    |
|        \* 、  / 、  %         |      乘法、除法、求模      |   2    |
|         +、**-**  、+         |   加法、减法、字符串拼接   |   3    |
|         <、<=、>、>=          |         关系运算符         |   4    |
|      ==、！=、===、！==       | 等于、不等于、全等、不全等 |   5    |
| **先 && 后 \|\|（先与后或）** |         逻辑运算符         |   6    |
|              ？:              |            条件            |   7    |
|     =、*=、/=、%=、+=、-=     |        赋值运算赋值        |   8    |
|               ,               |         逗号运算符         |   9    |

> 1.一元运算符里面的**逻辑非**优先级很高
>
> 2.**逻辑与** 比 **逻辑或** 优先级高

```javascript
var a = 3 > 5 && 2 < 7 && 3 == 4; 
console.log(a); 	//false 

var b = 3 <= 4 || 3 > 1 || 3 != 2; 
console.log(b); 	//true

var c = 2 === "2"; 
console.log(c);  	//false

var d = !c || b && a ;
console.log(d);		//true

console.log( 4 >= 6 || '人' != '阿凡达' && !(12 * 2 == 144) && true)	// true
```



# 四、表达式

# 五、控制语句

> **条件语句**	
>
> 分别是顺序结构、分支结构和循环结构，这三种结构代表三种代码执行的顺序

## 5.1if语句

**1.语法结构**

```
// 条件成立执行代码，否则什么也不做
if (条件表达式) {
    //条件成立执行的代码语句
}
```

**2.案例：进入网吧**

弹出一个输入框，要求用户输入年龄，如果年龄大于等于 18 岁，允许进网吧

```javascript
var age = prompt('请输入您的年龄:');
if(age >= 18)
{
      alert('您的年龄合法，欢迎来到网吧享受乐趣！');
}
```

## 5.2if else 语句

**1.语法结构**

```javascript
// 条件成立，执行if里面代码，否则执行else里面的代码
if(条件表达式)
{
    //当条件为true时成立执行的代码
}
else
    {
        //当条件为false时执行的代码
    }
```

**案例：判断闰年**

接收用户输入的年份，如果是闰年就弹出闰年，否则弹出是平年

**算法**：能被4整除且不能整除100的为闰年（如2004年就是闰年，1901年不是闰年）或者能够被 400 整除的就是闰年

```javascript
var year = prompt('请输入年份');

if (year % 4 == 0 && year % 100 !=0 || year % 400 ==0)
{
   alert('这个年份是闰年');
}
else
{
  alert('这个年份是平年');
}
```



## 5.3if else if 语句

**1.语法结构**

```javascript
if(条件表达式1)
{
   当条件表达式1为true时执行语句;
}
else if(条件表达式2)
{
   当条件表达式2为true时执行语句;
}
else if(条件表达式3)
{
  当条件表达式1和当条件表达式2都为false时执行语句;
}
else
{
   //上述条件都不成立执行此处代码
}
```

**案例 ：接收用户输入的分数，根据分数输出对应的等级字母 A、B、C、D、E**

1. 90分(含)以上 ，输出：A
2. 80分(含)~ 90 分(不含)，输出：B
3. 70分(含)~ 80 分(不含)，输出：C
4. 60分(含)~ 70 分(不含)，输出：D
5. 60分(不含) 以下，输出： E

```javascript
 var str = prompt('请您输入分数:');
        if (str >= 90) {
            alert('你是我的骄傲,你的成绩为：A');
        } else if (str >= 80) {
            alert('你已经很出色了,你的成绩为：B');
        } else if (str >= 70) {
            alert('你要继续加油喽,你的成绩为：C');
        } else if (str >= 60) {
            alert('你很危险,你的成绩为：D');
        } else {
            alert('可以再努力点吗，你很棒，但还不够棒,你的成绩为：E');
        }
```

## 5.4switch语句

**语法结构：**

- switch ：开关.  转换 ， case ：小例子  选项
- 关键字 switch 后跟一个表达式必须是整型或表达式， 通常是一个变量
- 关键字 case , 后跟一个选项的表达式或值，后面跟一个冒号
- switch 表达式的值会与结构中的 case 的值做比较
- 如果存在匹配全等(===) ，则与该 case 关联的代码块会被执行，并在遇到 break 时停止，整个 switch 语句代码执行结束
- 如果所有的 case 的值都和表达式的值不匹配，则执行 default 里的代码
- 执行case 里面的语句时，如果没有break，则继续执行下一个case里面的语句

```javascript
switch(表达式){
    case 取值1:
        语块1;break;
        //case value1
        //表达式等于 value1 时要执行的代
    case 取值2:
        语块2;break;
        // case value2:
        //表达式等于value2 时要执行的代码
        ......
    default:
    语块n+1;
     //表达式不等于任何一个value时要执行的代
}
```

**案例 季节**

```javascript
var str = prompt('请您输入季节:');
     switch (str) {
         case "春天":
                alert("这是春天"); break;

        case "夏天":
                alert("这是夏天"); break;

        case "秋天":
                alert("这是秋天"); break;

        case "冬天天":
                alert("这是冬天"); break;

        default:
                alert("暂不支持");
}
```

# 六、循环结构

## 6.1while循环

> while语句先判断是否符合条件，然后在执行循环体语句
>
> **while语句总结：**
> 首先判断循环条件是否成立
> 如果是true,那么先执行循环体（也就是{}里面的代码）,然后循环变量自增。接着返回循环条件，再判断循环条件是否成立，如同是true 或  false的情况
> 循环往复，直到结束。
>
> 如果是false，那么循环体中的代码不再执行，直接退出循环

**语句结构**

```
while(条件表达式语句){
	循环体
}										

```

执行思路：

> 1. 先执行**条件表达式语句**，如果结果为 true，则执行循环体代码；如果为 false，则退出循环，执行后面代码
> 2. 执行循环体代码
> 3. 循环体代码执行完毕后，程序会继续判断执行条件表达式，如**条件仍为true**，则会**继续执行循环体**，**直到循环条件为 false 时**，整个循环过程才会结束

①打印人的一生

```javascript

var age = 0;
while (age <= 100) {
    age++;
    console.log('您今年' + age + '岁了');
}
```

②计算 1 ~ 100 之间所有整数的和

```javascript
var figure = 1;
        var sum = 0;
        while (figure <= 100) {
            sum += figure;
            figure++;
        }
        console.log('1-100的整数和为' + sum);
```



## **6.2do..while循环**

> **do while循环和while循环的区别：**
>
> while循环先判断条件，如果条件不成立，循环体一次都不会执行
>
> 而do while循环先执行一次循环体，然后再进行条件判断，do while循环不管条件是否成立，都至少执行一次循环体。

**语句结构**

```javascript
do{
    	循环体;
}while（条件表达式语句）;
```



## 6.3for循环

在程序中，一组被重复执行的语句被称之为**循环体**，能否继续重复执行，取决于循环的**终止条件**。由循环体及循环的终止条件组成的语句，被称之为**循环语句**

```javascript
for(初始化表达式（变量）;循环条件表达式;循环后的操作表达式){
   //循环体
    执行语句块;
}
```

1**.输入1-100的数字**

```javascript
//基本语法
for(var i=1;i<=100;i++){
    document.write(i+"");
}

//用户输入次数
var str=prompt("请输入次数")
for(var i=1; i<=str; i++){
    document.write(i+"");
}
```

2.**输入10句"晚安哈！"**

```javascript
//基本写法
for(var i = 1; i<=10; i++  ){
         console.log('晚安哈');
    }

// 用户输入次数
var num = prompt('请输入次数:');
for(var i = 1; i<= num ;i++){
        console.log('晚安哈');
    }
```

3.**求1-100之间所有整数的累加和**

```javascript
var sum = 0;
for (var i = 1; i <= 100; i++) {
    var sum = sum + i;
}
console.log(sum);
```

4.**求1-100之间所有数的平均值**

```javascript
var sum = 0;
for (var i = 1; i <= 100; i++) {
    var sum = sum + i;
}
console.log(sum / 100);
```

5.**求1-100之间所有偶数和奇数的和**

```javascript
var sum1 = 0;
var sum2 = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum1 = sum1 + i;
    } else {
        sum2 = sum2 + i;
    }
}
console.log('偶数和为' + sum1);
console.log('奇数和为' + sum2);
```

6.**求1-100之间所有能被3整除的数字的和**

```javascript
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        sum += i;
    }
}
console.log(sum);
```

7.**要求用户输入班级人数，之后依次输入每个学生的成绩，最后打印出该班级总的成绩以及平均成绩。**

```javascript
var num = prompt('请输入班级总的人数:'); // num 班级总的人数
var sum = 0; // 总成绩
var average = 0; // 平均成绩
for (var i = 1; i <= num; i++) {
     var score = prompt('请输入第' + i + '个学生的成绩');
    //这里接收的是str，必须转换为数值
     sum = sum + parseFloat(score);         
}
average = sum / num;
alert('班级总的成绩是：' + sum);
alert('班级总的平均成绩是：' + average);
```

8.**一行打印5个星星**

```javascript
var star = '';
for (var i = 1; i <= 5; i++) {
     star += '☆';
 }
console.log(star);
```



### 6.3.1循环嵌套(双重for循环)

## 6.4break关键词和continue关键词

> **1.break关键词**
>
> break 关键字（语句）用于**立即跳出整个循环**

eg：吃5个包子，第3个有虫子，就扔掉第3个，继续吃第4个第5个包子

> **2.continue关键词**
>
> continue 关键字（语句）用于**立即跳出本次循环，继续下一次循环**（本次循环体中 continue 之后的代码就会少执行一次）。

eg：吃5个包子，第3个有虫子，就扔掉第3个，继续吃第4个第5个包子

```javascript
for (var i = 1; i <= 5; i++) {
 if (i == 3) {
     console.log('这个包子有虫子，扔掉');
     continue; // 跳出本次循环，跳出的是第3次循环 
  }
  console.log('我正在吃第' + i + '个包子呢');
}
```



# BOM浏览器对象模型

# DOM文档对象模型