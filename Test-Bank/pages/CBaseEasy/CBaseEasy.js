Page({
  data: {
    item:{
    questions: ['一个C程序由若干个C函数组成，各个函数在文件中的位置为( )', '下列四个叙述中，正确的是( )', '下列四个叙述中，错误的是( )', '下面属于C语言关键字的是( )', '以下叙述不正确的是( )', 'C语言中允许的基本数据类型包括( )', 'C语言中能用八进制表示的数据类型为( )', '下列属于C语言合法的字符常数是( )', '在C语言中，5种基本数据类型的存储空间长度的排列顺序为( )', '在C语言中，合法的长整型常数是( )', '若有以下定义语句char c1=\'b\', c2=\'e\'; printf("%d,%c\\n",c2-c1,c2-\'a\'+\'A\');则输出结果是( )', '以下合法的赋值语句是( )', '设变量t为int型，下列选项中不正确的赋值语句是( )', '在以下一组运算符中，优先级最高的是( )', '下列能正确表示a≥10或a≤0的关系表达式是( )', '下列只有当整数x为奇数时，才是逻辑“真”的表达式是( )', '设a为整型变量，不能正确表达数学关系10<a<15的C语言表达式是( )', '已知x=43, ch=\'A\'，y=0；则表达式（x>=y&&ch<\'B\'&&!y）的值是', '表达式17%4/8的值为( )', '语句printf("%d",(a=2)&&(b= -2));的输出结果是( )', '下列程序的输出结果为（）\nint main()\n{\nint m= 7, n = 4;\nfloat a= 38.4, b=6.4,x;\nx=m/2+n*a/b+1/2;\nprintf("%f\\n",x);\n}', '若x和y代表整型数，以下表达式中不能正确表示数学关系|x-y|<10的是( )', '在x == y; 语句中会执行什么操作？', 'C语言程序中,若对函数类型未加显式说明,则函数的隐含说明类型为( )', '下列错误的十六进制整型常量表示是( )', '32位机上，给你1、2、3这三个数字，可以使用C的各种运算符，你能在计算机上得到的最大的整数是( )', 'C语言编译程序的首要工作是（）', '在C语言中，函数的隐含存储类别是（）', '若 x=2,y=3则 x&y 的结果是（）', '一个C程序的执行是从( )', '以下正确的描述是：在 C 语言程序中（）', '下面选项中关于编译预处理的叙述正确的是( )', '在下列选项中，合法的C语言用户标识符的是( )', '通过return语句，函数可以带回一个或一个以上的返回值。', 'C++语言本身没有输入输出语句。说法是否正确？', '假设有说明 int a=0; double x=5.16;，则在以下语句中，（ ）属于编译错误。', '能正确表示逻辑关系:"a≥10或a≤0"的C语言表达式是（ ）', '若变量a、i已正确定义，且i已正确赋值，合法的语句是（ ）', '假定x的值为5，y的值为6，则表达式x++*--y的值为（ ）', '请问经过表达式a = 5 ? 0 : 1的运算,变量a的最终值是?', '以下选项中不属于C语言标识符的是？', '下列字符序列中，可用作 C 标识符的一组字符序列是（）', 'C语言程序中,运算对象必须是整型数的运算符是？', '已知宏定义\n#define N 3\n#define Y(n) ((N+1)*n)\n执行语句 z=2*(N+Y(5+1)); 变量 z 的值是（）', '45、下列关于C/C++的宏定义，不正确的是（）', '一个C语言程序在一台32位机器上运行。程序中定义了三个变量xyz，其中x和z是int型，y为short型。当x=127，y=-9时，执行赋值语句z=x+y后，xyz的值分别是_____', '以下代码输出什么?\nint a =1,b =32;\nprintf("%d,%d",a<<b,1<<32);', 'C语言字符串以\\0结束，\\0在内存中的表示为（）', 'C语言是由（ ）基本单位组成的。', '以下程序的输出结果是（）\nint main()\n{\nint a= 0;\na+=(a = 8);\nprintf("%d\\n",a);\n}', '若a是float型变量，b是unsigned型变量，以下输入语句中合法的是（）', 'C 语言中的标识符只能由字母,数字和下划线三种字符组成,且第一个字符（）', 'x > 0 || y == 5的相反表达式为（ ）', '假设所有变量均为整型，则表达式(a=2,b=5,b++,a+b)的值是（）', '设有定义语句：char c1=92,c2=92;,则以下表达式中值为零的是( )', '逗号表达式(x=4*5, x*5), x+25的值为（ ）', '结构化程序设计所规定的三种基本控制结构是顺序、选择、输出。请问这句话的说法是正确的吗？', '设有 int x=11; 则表达式 (x++ * 1/3) 的值是（）', '以下程序的输出结果为（）\nint main()\n{\nint i= 010, j=10;\nprintf("%d,%d\\n",++i, j--);\n}', '以下定义语句中正确的是(  )', '关于static用途说法错误的是（）', '下列字符序列中，不可用作 C 语言标识符的是（）', '假定n的值为5，则表达式n++的值为（ ）', '以下描述中，正确的是（）', '判断char型变量cl是否为小写字母的正确表达式是（）', '已知charc=48;int i=1,j=10;执行语句j=!(c>j)&&i++;则i和j的值分别是1和0。请问这句话是正确的吗？', '若有定义；int a=7；float x=2.5，y=4.7；则表达式x+a%3*(int)(x+y)%2/4的值是( )', '#define DOUBLE(x) x+x\nint i = 5*DOUBLE(5);\ni的值是多少？', '以下选项中不属于C语言标识符的是（）', '下面四个表达式中错误的一项是（）', '若变量a是int类型，并执行了语句：a=\'A\' + 1.6;则正确的叙述是（ ）', '由C语言源程序文件编译而成的目标文件的默认扩展名为（）', '以下标识符中不全是保留字的是（ ）', '如下语句通过算术运算和逻辑运算之后i和j的结果是（）\nint i=0;\nint j=0;\nif((++i>0)||(++j>0))\n{//打印出i和j的值}', '以下不正确的叙述是（）', '以下数据中,不正确的数值或字符常量是（）', '以下正确的叙述有（）', '在16位C编译系统上，若定义long a;则能给a赋40000的正确语句是（ ）', '（ ）的作用是将源程序文件进行处理，生成一个中间文件，编译系统将对此中间文件进行编译并生成目标代码。', '以下叙述正确的是（）', '若有宏定义：#define S(a,b) t=a;a=b;b=t由于变量t没定义，所以此宏定义是错误的。请问这句话的说法是正确的吗？', '以下的C程序代码片段运行后c和d的值分别是多少（）\nint a = 1,b = 2;\nint c,d;\nc = (a&b)&&a;\nd = (a&&b)&a;', '下面代码的输出结果是（）\nint main()\n{int z,x = 5,y = -10,a = 4,b = 2;\nz = x++ - --y * b/a;\nprintf("%d\\n",z);\nreturn 0;}', 'typedef char T[10];\nT * a;\n上述定义中a的类型与下面选项中完全相同的是?', '表示关系式x≤y≤z的C语言表达式的是（）', '已知：int x=1，y=-1;,则语句printf("%d\\n",(x--& ++y));的输出结果是（ ）', 'C语言中的标识符只能由字母，数字和下划线三种字符组成，且第一个字符（）', '执行完下列语句段后，i值为（）\nint f(int x)\n{return ((x>0) ? x* f(x-1):2);}\nint i;\ni =f(f(1));', '下面的代码段中，执行之后i和j的值是什么（）\nint i=1;\nint j;\nj=i++;', '若希望当 A 的值为奇数时,表达式的值为"真",A 的值为偶数时,表达式的值为"假",则以下不能满足要求的表达式是（）', '以下叙述中正确的是 (  )', '从下列选项中选择不会引起二义性的宏定义是（）', '*p++ 自增p还是p所指向的变量（）', '有如下程序段：\nchar ch = -1;\nprintf("%02x,%02x",ch,(unsigned char)ch);\n则输出（）', '定义带参数的宏\n"#define JH (a,b,t) t=a; a=b; b=t;"\n对两个参数a、b的值进行交换，下列表述中正确的是（ ）', '使用语句scanf(“a=%f,b=%d”,&a,&b);输入数据时，正确的数据输入是（ ）', '若执行以下程序段\nint x=3,y=6,z; z=x^y<<2;\n则z的二进制值是（）', '以下只有在使用时才为该类型变量分配内存的存储类说明是（）', '十进制数50表示成符合C语言规定的八进制数为（）', '在c语言程序中，当调用函数时，正确的是（ ）', '下面字符常量正确的是（ ）', '以下叙述中正确的是（）', '若局部变量和全局变量重名，会发生什么？（）', '在位运算中，操作数每左移一位，其结果相当于（）', '如果有#define AREA(a,b)a+b则语句int s=AREA(3,4)*AREA(3,4) 执行后变量s值为（）', '已知 char c=48;int i=1,j=10;执行语句j=!(c>j)&&i++;则i和j的值分别是1和0。请问这句话是正确的吗？', 'int fun(int a)\n{ a^=(1<<5)-1;\nreturn a;}\nfun(21)运行结果是（）', '当#include 后面的文件名用双引号括起来时，寻找被包含文件的方式是(  )', 'int a=5,则 ++(a++)的值是（）', 'C语言中运算对象必须是整型的运算符是（）', '有如下一段代码：\n#define ADD(x,y) x+y\nint m=3;\nm+=m*ADD(m,m);\n最后m的值为（）', '在C语言中,关于静态变量的说法,正确的有（）', '知字母a的ASCII十进制代码为97，则执行下列语句后的输出结果为（）\nchar a=\'a\'; a--;\nprintf("%d,%c\\n",a+\'2\'-\'0\',a+\'3\'-\'0\');', '用C语言编写的代码程序(  )', '请问经过表达式a = 5 ? 0 : 1的运算,变量a的最终值是（）', '头文件中的 ifndef/define/endif 干什么用（）', '以下程序运行后的输出结果是（）\n#define S(x) 4*x*x+1\nint main()\n{int i=6,j=8;\nprintf("%d\\n",S(i+j));}', '一个8位的二进制整数,采用补码表示,且由3个"1"和5个"0"组成,则最小值为（）', 'int a=4,则对于表达式++(a++)的结果说法正确的是（）', '设x和y均为int型变量,则以下语句的功能是（）\nx+=y;\ny=x-y;\nx-=y;', 'C语言程序经过链接以后生成的文件名的后缀为（）', '以下叙述中正确的是（）', '在下列选项中,不正确的赋值语句是（）', '下面合法的C语言字符常量是（）', '表达式: 10!=9的值是（）', 'C语言提供的合法的数据类型关键字是（）', '字符(char)型数据在微机内存中的存储形式是（）', '设 int a=12,则执行完语句a+=a-=a*a后,a的值是（）', '下面程序的输出的是（）\n#include<stdio.h>\nint main()\n{int x=10,y=3;\nprintf("%d\\n",y=x/y);}', '已知字母A的ASCII码为十进制的65,下面程序的输出是（）\nint main()\n{char ch1,ch2;\nch1=\'A\'+\'5\'-\'3\';\nch2=\'A\'+\'6\'-\'3\';\nprintf("%d,%c\\n",ch1,ch2);}', '若要求在if后一对圆括号中表示a不等于0的关系,则能正确表示这一关系的表达式为（）', '以下程序的输出结果是（）\n#include<stdio.h>\nvoid main()\n{int x=10,y=10;\nprintf("%d %d\\n",x--,--y);}', '设有如下定义:int x=10,y=3,z; 则语句printf("%d\\n",z=(x%y,x/y)); 的输出结果是（）', '若x和y都是int型变量，x=100,y=200，则下面程序片段的输出结果是（）\nprintf("%d",(x,y));', '阅读下面的程序\nvoid main()\n{char ch;\nscanf("%3c",&ch);\nprintf("%c",ch);}如果从键盘上输入abc回车,则程序运行的结果是( )', '阅读下面的程序\nvoid main()\n{int i,j,m,n;\ni=8;j=10;\nm=++i;\nn=j++;\nprintf("%d,%d,%d,%d",i,j,m,n);}\n程序的运行结果是（）', '若已定义int a,则表达式a=10,a+10,a++的值是（）', '阅读下面的程序\nvoid main()\n{int i,j;\nscanf("%3d%2d",&i,&j);\nprintf("i=%d,j=%d\\n",i,j);}\n如果从键盘上输入1234567回车,则程序的运行结果是（）', '执行下面程序段后,输出结果是（）\nshort a;\nint b=65536;\na=b;\nprintf("%d\\n",a);', '以下程序的输出结果是（）\nvoid main()\n{int a=12, b=12;\nprintf("%d,%d\\n",--a,++b);}', '设有以下语句:int x=10;x+=3+x%(3),则x的值是（）', '若d为double型变量,则表达式d=1,d+5,d++的值是（）', '表达式5!=3的值是（）', '在C语言中,以下叙述不正确的是（）', 'C语言中的变量名只能由字母,数字和下划线三种字符组成,且第一个字符（）', '一个C语言的执行是从（）', '已知x>=y && y>=z为真，那么x>z || y==z值为（）', '若有定义typedef char STRING[255]; STRING s; 则s是（ ）', '若有定义语句：int a=10;double b=3.14;则表达式\'A\'+a+b值的类型是（）', 'char a;int b;float c;double d;则表达式 a*b+d-c 值的类型为（）', 'int *p[4] 与选择项中的（）等价。', '下面代码的执行结果是什么（）\nchar s[]="\\\\123456\\123456\\t";\nprintf("%d\\n",strlen(s));', '执行以下程序段后，x的值是（）\nint x=0;\nswitch(++x)\n{case 0: ++x;\ncase 1: ++x;\ncase 2: ++x;}', '1<<3+2的值是（）。', 'C语言属于(  )', '*p++自增p还是p所指向的变量?', 'C语言字符串以\\0结束,\\0在内存中的表示为( )', '以下哪个属于在预编译阶段执行________,以下哪些指令属于操作符________｡\na:  malloc;\nb:  ++;\nc:  #pragma;\nd:  sizeof;\ne:  #define', '以下叙述中正确的是( )', '以下程序的输出结果是( )\nint main(){\nchar x = 040;\nprintf("%0\\n",x<<1);\n}', '在C语言中,非法的八进制是( )', '程序运行后的输出结果是( )\nint main(){\nchar a=\'H\';\na=(a>\'A\'&& a<=\'Z\') ?(a+32):a;\nprintf("％c\\n",a);\n}', '二进制数01011011转化为十进制为( )', '要调用数学处理函数时,在#include命令行中应包含( )', '以下叙述中正确的是( )', 'C语言中,下列运算符优先级最高的是( )', '每个C语言程序文件的编译错误分为(  )类｡', '下列叙述正确的是( )', '以下叙述中正确的是( )','引用标准库时,下面的说法你认为哪个是正确的( )'],

    questionsA: ['A.任意', 'A.C程序中的所有字母都必须小写', 'A.一个C源程序必须有且只能有一个主函数', 'A.Int', 'A.分号是C语句的必要组成部分', 'A.整型、实型、逻辑型', 'A.字符型、整型', 'A.\'\\97\'', 'A.char<int<long int<=float<double', 'A.0L', 'A.2,M', 'A.x=y=100', 'A.++t;', 'A.<=', 'A.a>=10 or a<=0', 'A.x%2==0', 'A.10<a<15', 'A.0', 'A.0', 'A.无输出', 'A.27.000000', 'A.abs(x-y)<10', 'A.检查x和y是否相等', 'A.void', 'A.0x11', 'A.2*3*sizeof(1)', 'A.检查C程序的语法错误', 'A.auto', 'A.0', 'A.main()函数开始，直到main()函数结束', 'A.函数的定义可以嵌套,但函数的调用不可以嵌套', 'A.预处理命令行必须使用分号结尾', 'A.int', 'A.正确', 'A.正确', 'A.x=a/x;', 'A.a>=10 or a<=0', 'A.a==1;', 'A.25', 'A.5', 'A.常量', 'A.S.b，sum，average，_above', 'A.&&', 'A.42', 'A.宏定义不检查参数正确性，会有安全隐患', 'A.x=0000007FH，y=FFF9H，z=00000076H', 'A.1,1', 'A.\\0由\\和0两个字符组成', 'A.过程', 'A.8', 'A.scanf("%6.2f%d",&a,&b);', 'A.必须为字母', 'A.x <= 0 || y != 5', 'A.7', 'A.c1^c2', 'A.25', 'A.正确', 'A.3', 'A.11,10', 'A.char a=\'A\'b=\'B\';', 'A.声明静态外部类', 'A.b70', 'A.6', 'A.预处理是指完成宏替换和文件包含中指定的文件的调用', 'A.\'a\'<=cl<=\'z\'', 'A.正确', 'A.2.500000', 'A.30', 'A.常量', 'A.a+=(a++)', 'A.a的值是字符C', 'A.cpp', 'A.case  for  int', 'A.i=0;j=0', 'A.在C程序中所用的变量必须先定义后使用', 'A.8.9e1.2', 'A.在C程序中，每行只能写一条语句', 'A.a=20000+20000;', 'A.编译预处理', 'A.可以把define和if定义为用户标识符', 'A.正确', 'A.0,0', 'A.5', 'A.char a [10];', 'A.(x<=y)&&(y<=z)', 'A.1', 'A.必须为字母', 'A.2', 'A.1,1', 'A.A%2==1', 'A.预处理命令行必须位于源文件的开头', 'A.#define POWER(x) x*x', 'A.先自增p', 'A.-1,-1', 'A.不定义参数a和b将导致编译错误', 'A.a=2.2,b=3', 'A.00011011', 'A.auto和static', 'A.20', 'A.全局变量开始占用存储单元', 'A."c"', 'A.在程序的一行上可以出现多个有效的预处理命令行', 'A.只能访问局部变量', 'A.操作数乘以2', 'A.24', 'A.正确', 'A.10', 'A.直接按系统设定的标准方式搜索目录', 'A.5', 'A./', 'A.15', 'A.静态变量和常量的作用相同', 'A.b,c', 'A.可立即执行', 'A.5', 'A.定义常量', 'A.21', 'A.-127', 'A.结果为5', 'A.把x和y按从大到小排列', 'A. .c', 'A.逻辑"或"（即运算符||）的运算级别比算术运算要高', 'A.++t;', 'A.\'t\'', 'A.true', 'A.Double', 'A.反码', 'A.552', 'A.0', 'A.67,D', 'A.a<>0', 'A.10 10', 'A.1', 'A.200', 'A.a', 'A.8,10,8,10', 'A.20', 'A.i=123,j=4567', 'A.65536', 'A.10,10', 'A.14', 'A.1', 'A.T', 'A.在C程序中,无论是整数还是实数,都能被准确无误的表示', 'A.必须为字母', 'A.本程序的主函数开始,到本程序的主函数结束', 'A.真;', 'A.字符指针数组变量', 'A.char', 'A.float', 'A.int p[4]', 'A.12', 'A.2', 'A.32', 'A.机器语言', 'A.先自增p', 'A.\\0由\\和0两个字符组成', 'A.预编译c,e 操作符a,b', 'A.在scanf函数的格式串中,必须有与输入项一一对应的格式转换说明符', 'A.100', 'A.018', 'A.H', 'A.103', 'A."stdio.h"', 'A.在scanf函数的格式串中,必须有与输入项一一对应的格式转换说明符', 'A.!', 'A.1', 'A.预处理命令行必须位于源文件的开头', 'A.由printf输出的数据都隐含左对齐','A.语句#include "stdlib.h"是对的,速度比#include <stdlib.h>要快'],

    questionsB: ['B.第一个函数必须是主函数，其他函数任意', 'B.C程序中的关键字必须小写，其他标示符不区分大小写', 'B.一个C源程序可以含零个或多个子函数', 'B.typedef', 'B.C程序的注释可以写在语句的后面', 'B.整型、实型、字符型', 'B.整形、实型', 'B."A"', 'B.char=int<long int<=float<double', 'B.4962710', 'B.3,E', 'B.d-', 'B.n1=(n2=(n3=0));', 'B.==', 'B.a>=10 | a<=0', 'B.!(x%2==0)', 'B.a==11 || a==12 || a==13 || a==14', 'B.语法错', 'B.1', 'B.结果不确定', 'B.27.500000', 'B.x-y>-10&& x-y<10', 'B.将y的值赋值给x', 'B.double', 'B.0xaf', 'B.3<<(2<<sizeof(1))', 'B.检查C程序的逻辑错误', 'B.static', 'B.2', 'B.第一个函数开始，最后一个函数结束', 'B.函数的定义不可以嵌套,但函数的调用可以嵌套', 'B.凡是以#号开头的行，都被称为编译预处理命令行', 'B.sin', 'B.错误', 'B.错误', 'B.x=x/a;', 'B.a>=0|a<=10', 'B.++i;', 'B.30', 'B.1', 'B.用户标识符', 'B.class，day，lotus_1，2day', 'B./', 'B.48', 'B.宏定义常量更容易理解，可以使用宏定义的情况避免使用const常量', 'B.x=0000007FH，y=FFF9H，z=FFFF0076H', 'B.1,0', 'B.在内存中实际表示为0', 'B.语句', 'B.16', 'B.scanf("%f%n",&a,&b);', 'B.必须为下划线', 'B.x <= 0 && y != 5', 'B.8', 'B.c1&c2', 'B.20', 'B.错误', 'B.4', 'B.9,10', 'B.float a=b=10.0;', 'B.声明静态全局变量', 'B.#ab', 'B.5', 'B.预处理指令只能位于C源文件的开始', 'B.(cl>=a)&&(cl<=z)', 'B.错误', 'B.2.750000', 'B.50', 'B.用户标识符', 'B.a+=(++a)', 'B.a的值是浮点型', 'B.c', 'B.default  then  while', 'B.i=1;j=1', 'B.程序中,APH和aph是两个不同的变量', 'B.10', 'B.在C程序中，一条语句只写在一行上', 'B.a=4000*10;', 'B.汇编', 'B.可以把define定义为用户标识符，但不能把if定义为用户标识符', 'B.错误', 'B.0,1', 'B.6', 'B.char (*a)[10];', 'B.(x<=y)‖(y<=z)', 'B.0', 'B.必须为下划线', 'B.4', 'B.1,2', 'B.!(A%2==0)', 'B.在源文件的一行上可以有多条预处理命令', 'B.#define POWER(x) (x)*(x)', 'B.先自增p所指向的变量', 'B.ff,ff', 'B.不定义参数a、b、t将导致编译错误', 'B.a=2.2 b=3', 'B.00010100', 'B.auto和register', 'B.32', 'B.形参不需要分配存储单元', 'B."\\\\"', 'B.使用带参的宏时，参数的类型应与宏定义时的一致', 'B.局部变量会屏蔽全局变量，要使用全局变量，需要使用"::"', 'B.操作数除以2', 'B.49', 'B.错误', 'B.5', 'B.先在源程序所在目录搜索，再按系统设定的标准方式搜索目录', 'B.6', 'B.%', 'B.21', 'B.函数中的静态变量,在函数退出后不被释放', 'B.a--运算不合法,故有语法错', 'B.是一个源程序', 'B.1', 'B.标记为特殊的头文件', 'B.41', 'B.-32', 'B.结果为6', 'B.把x和y按从小到大排列', 'B. .obj', 'B.C语言的关系表达式：0<x<10完全等价于: (0<x) && (x<10)', 'B.n1=(n2=(n3=0));', 'B."A"', 'B.非零值', 'B.short', 'B.补码', 'B.264', 'B.1', 'B.B,C', 'B.!a', 'B.9 9', 'B.0', 'B.100', 'B.b', 'B.9,11,8,10', 'B.10', 'B.i=1234,j=567', 'B.0', 'B.12,12', 'B.15', 'B.6.0', 'B.非零值', 'B.在C程序中,变量名代表存储器中的一个位置', 'B.必须为下划线', 'B.本程序的第一个函数开始,到本程序的最后一个函数结束', 'B.假', 'B.字符数组变量', 'B.int', 'B.int', 'B.int *p', 'B.13', 'B.0', 'B.10', 'B.低级语言', 'B.先自增p所指向的变量', 'B.在内存中实际表示为0', 'B.预编译c,d 操作符b,e', 'B.只能在printf函数中指定输入数据的宽度,而不能在scanf函数中指定', 'B.80', 'B.016', 'B.h', 'B.91', 'B."string.h"', 'B.只能在printf函数中指定输入数据的宽度,而不能在scanf函数中指定', 'B.%', 'B.2', 'B.在源文件的一行上可以有多条预处理命令', 'B.scanf和printf是C语言提供的输入和输出语句','B.语句#include <stdlib.h>是对的,速度比#include "stdlib.h"快'],

    questionsC: ['C.必须完全按照顺序排列', 'C.C程序中的所有字母都不区分大小写', 'C.在C源程序中注释说明必须位于语句之后', 'C.enmu', 'C.函数是C程序的基本单位', 'C.整型、字符型、逻辑型', 'C.字符型、实型、双精度型', 'C.\'\\t\'', 'C.char<int<long int=float=double', 'C.0412765', 'C.2,E', 'C.x+y', 'C.k=i==m;', 'C.%', 'C.a>=10 || a<=0', 'C.(x-x/2*2)==0', 'C.a>10 && a<15', 'C.1', 'C.2', 'C.-1', 'C.28.000000', 'C.(x-y)<-10||!(y-x)>10', 'C.表示x除以y', 'C.int', 'C.0xg', 'C.sizeof(3)<<(sizeof(2)<<(sizeof(1)))', 'C.检查程序的完整性', 'C.extern', 'C.3', 'C.第一个语句开始，最后一个语句结束', 'C.函数的定义和函数的调用均不可以嵌套', 'C.预处理命令行不能出现在程序的最后一行', 'C.if', '', '', 'C.a=a%x;', 'C.a>=10&&a<=0', 'C.a=a++=5', 'C.36', 'C.0', 'C.关键字', 'C.#md，&12x，month，student_n!', 'C.%', 'C.54', 'C.宏的嵌套定义过多会影响程序的可读性，而且很容易出错', 'C.x=0000007FH，y=FFF7H，z=FFFF0076H', 'C.0,0', 'C.ASCII码为0×2A', 'C.函数', 'C.24', 'C.scanf("%f%3o",&a,&b);', 'C.必须为字母或下划线', 'C.x > 0 || y != 5', 'C.6', 'C.~c2', 'C.100', '', 'C.11', 'C.010,9', 'C.int a=10,*b=&a;', 'C.声明静态函数', 'C.symbol', 'C.4', 'C.C源程序中凡是行首以#标识的控制行都是预处理指令', 'C.(\'a\'>=cl)||(\'z\'<=cl)', '', 'C.3.500000', 'C.100', 'C.关键字', 'C.(a++)+=a', 'C.不允许字符型和浮点型相加', 'C.exe', 'C.bool  class  long', 'C.i=0;j=1', 'C.若a和b类型相同,执行了赋值语句a=b;后b的值将放入a中,b中的值不变', 'C.0xff00', 'C.在C程序中，多条语句必须写在多行上', 'C.a=30000+10000;', 'C.生成安装文件', 'C.可以把if定义为用户标识符，但不能把define定义为用户标识符', '', 'C.1,0', 'C.10', 'C.char *a;', 'C.(x<=y<=z)', 'C.-1', 'C.必须为字母或下划线', 'C.8', 'C.2,1', 'C.!(A%2)', 'C.宏名必须用大写字母表示', 'C.#define POWER(x) (x*x)', 'C.和机器相关', 'C.ffffffff,ff', 'C.不定义参数t将导致运行错误', 'C.2.2 3', 'C.00011000', 'C.register和static', 'C.62', 'C.内部变量开始占用存储单元', 'C.\'n\'', 'C.宏替换不占用运行时间，只占编译时间', 'C.全局变量会屏蔽局部变量，要使用局部变量，需要使用"::"', 'C.操作数除以4', 'C.144', '', 'C.3', 'C.仅仅搜索源程序所在目录', 'C.7', 'C.<=', 'C.58', 'C.静态变量只可以赋值一次,赋值后则不能改变', 'C.98,c', 'C.经过编译即可执行', 'C.0', 'C.防止头文件被重复引用', 'C.61', 'C.-125', 'C.结果为7', 'C.无确定结果', 'C. .exe', 'C.逻辑"非"（即运算符!）的运算级别是最低的', 'C.k=i=j;', 'C.65', 'C.0', 'C.integer', 'C.EBCDIC码', 'C.144', 'C.3', 'C.C,D', 'C.a=0', 'C.9 10', 'C.4', 'C.100 200', 'C.c', 'C.9,11,9,10', 'C.21', 'C.i=1,j=2', 'C.-1', 'C.11,10', 'C.11', 'C.2.0', 'C.0', 'C.静态变量的生存期与整个程序的生存期相同', 'C.必须为字母或下划线', 'C.本程序的主函数开始,到本程序的最后一个函数结束', 'C.无法确定', 'C.字符变量', 'C.double', 'C.char', 'C.int *(p[4])', 'C.16', 'C.3', 'C.16', 'C.中级语言', 'C.和机器相关', 'C.ASCII码为0×2A', 'C.预编译c,e 操作符b,d', 'C.scanf函数中的字符串,是提示程序员的,输入数据时不必管它', 'C.64', 'C.017', 'C.A', 'C.171', 'C." math.h"', 'C.scanf函数中的字符串,是提示程序员的,输入数据时不必管它', 'C.>>', 'C.3', 'C.宏名必须用大写字母表示', 'C.赋值语句是一种执行语句,必须放在函数的可执行部分','C.#include <stdlib.h>和#include "stdlib.h"都是对的,速度无区别'],

    questionsD: ['D.其他函数必须在前，主函数必须在最后', 'D.C语言中的所有关键字必须小写', 'D.C源程序的基本结构是函数', 'D.unien', 'D.主函数的名字不一定用main表示', 'D.整型、实型、逻辑型、字符型', 'D.字符型、整型、实型、双精度型', 'D."\\0"', 'D.char=int=<long int<=float<double', 'D.0xa34b7fe', 'D.输出项与相应的格式控制不一致，输出结果不确定', 'D.c=int(a+b)', 'D.a=b+c=1;', 'D.&&', 'D.a>=10 && a<=0', 'D.!(x%2)', 'D.!(a<=10)&&!(a>=15)', 'D."假"', 'D.3', 'D.1', 'D.28.500000', 'D.(x-y)*(x-y)<100', 'D.x和y互相排斥', 'D.char', 'D.0x1f', 'D.(unsigned long)(2-3)*1', 'D.生成目标文件', 'D.无存储类别', 'D.5', 'D.main()函数开始，直到最后一个函数', 'D.函数的定义和函数的调用均可以嵌套', 'D.预处理命令行的作用域是到最近的函数结束处', 'D.i+j', '', '', 'D.x=x*a;', 'D.a>=10||a<=0', 'D.a=int(i);', 'D.42', 'D.true', 'D.预定义标识符', 'D.D56，r_1_2，name，_st_1', 'D.*', 'D.出错', 'D.相对于函数调用，宏定义可以提高程序的运行效率', 'D.x=0000007FH，y=FFF7H，z=00000076H', 'D.取决于编译器', 'D.\\0不同的操作系统表示方法不一样，依赖实现', '程序', 'D.32', 'D.scanf("%f%f",&a,&b);', 'D.可以是字母,数字和下划线任一字符', 'D.x > 0 && y == 5', 'D.2', 'D.c1|c2', 'D.45', '', 'D.12', 'D.10,9', 'D.float *a,b=&a;', 'D.声明静态局部变量', 'D.a_1', 'D.7', 'D.预处理就是完成C编译程序对C源程序第一遍扫描,为编译词法和语法分析作准备', 'D.(cl>=\'a\')&&(cl<=\'z\')', '', 'D.0.000000', 'D.语法错误', 'D.预定义标识符', 'D.(++a)+=(a++)', 'D.a的值是字符\'A\'的ASCII值加上1', 'D.obj', 'D.goto  return  char', 'D.i=1;j=0', 'D.当输入数值数据时,对于整型变量只能输入整型值;对于实型变量只能输入实型值', 'D.82.5', 'D.在C程序中，多条语句可以写在一行上', 'D.a=4000L*10L;', 'D.编译', 'D.define和if都不能定义为用户标识符', '', 'D.1,1', 'D.11', 'D.char *a[10];', 'D.x<=y＝!(y<=z)', 'D.2', 'D.可以是字母,数字和下划线任一字符', 'D.无线递归', 'D.2,2', 'D.A%2', 'D.宏替换不占用程序的运行时间', 'D.#define POWER(x) (x)*x', '', 'D.ff,ffffffff', 'D.不必定义参数a、b、t类型', 'D.2.2,3', 'D.00000110', 'D.extern和register', 'D.062', 'D.外部变量开始占用存储单元', 'D.\'ab\'', 'D.在以下定义中C R是称为“宏名”的标识符 #define C R 045', 'D.只能访问全局变量', 'D.操作数乘以4', 'D.19', '', 'D.8', 'D.搜索当前逻辑盘上的所有目录', 'D.编译出错', 'D.+=', 'D.18', 'D.静态全局变量的作用域为一个程序的所有源文件', 'D.格式描述和输出项不匹配,输出无定值', 'D.经过编译解释才能执行', 'D.true', 'D.注释头文件', 'D.81', 'D.-3', 'D.以上都不是', 'D.交换x和y中的值', 'D. .cpp', 'D.由&&构成的逻辑表达式与由||构成的逻辑表达式都有"短路"现象', 'D.a=b+c=1;', 'D.A', 'D.1', 'D.Char', 'D.ASCII码', 'D.-264', 'D.不确定的值', 'D.不确定的值', 'D.a', 'D.10 9', 'D.3', 'D.输出格式符不够,输出不确定的值', 'D.程序语法出错', 'D.9,10,9,11', 'D.11', 'D.i=123,j=45', 'D.1', 'D.11,13', 'D.12', 'D.1.0', 'D.1', 'D.C语言中变量必须先定义后引用', 'D.可以是字母,数字或下划线中的任意一种', 'D.本程序的第一个函数开始,到本程序的主函数结束', 'D.xyz同时为正数时为真', 'D.字符指针变量', 'D.float', 'D.double', 'D.int (*p)[4]', 'D.以上都不对', 'D.4', 'D.6', 'D.高级语言', '', 'D.\\0不同的操作系统表示方法不一样,依赖实现', 'D.预编译a,d 操作符b,d', 'D.复合语句也被称为语句块,它至少要包含两条语句', 'D.32', 'D.0257', 'D.a', 'D.71', 'D."ctype.h"', 'D.复合语句也被称为语句块,它至少要包含两条语句', 'D.==', 'D.4', 'D.宏替换不占用程序运行时间', 'D.由printf输出的数据的实际精度是由格式控制中的域宽和小数的域宽来完全决定的','D.语句#include "stdlib.h"是错误的'],

    answer: ['A','D','C','B','D','B','A','C','A','A','B','A','D','C','C','B','A','C','A','D','A','C','A','C','C','D','A','C','B','A','B','B','B','B','A','C','D','B','A','C','A','D','C','B','B','D','D','B','C','B','C','C','B','B','A','D','B','A','B','C','A','B','B','C','D','A','A','A','A','C','D','D','B','D','D','A','D','D','A','B','B','B','C','B','A','B','C','B','C','C','D','B','A','C','C','A','A','B','D','C','C','C','B','A','D','A','A','B','D','B','A','B','C','B','C','C','D','C','B','D','C','D','D','A','D','B','D','D','C','A','D','D','D','A','A','C','B','D','B','D','A','D','D','A','C','A','A','B','C','D','C','A','C','A','D','A','B','C','A','A','A','B','B','C','A','A','B','D','C','B'],

    questionbody: '',
    A: '',
    B: '',
    C: '',
    D: '',
    Ans: '',
    show: '',
    countj: true,
    bindcount: 0,
    errorcount: 0,
    rightcount: 0,
    count: 0,
    index: '',
    borA: "1rpx solid #FFF;",
    backcolorA: "rgba(0,0,0,0);",
    borB: "1rpx solid #FFF;",
    backcolorB: "rgba(0,0,0,0);",
    borC: "1rpx solid #FFF;",
    backcolorC: "rgba(0,0,0,0);",
    borD: "1rpx solid #FFF;",
    backcolorD: "rgba(0,0,0,0);",
    fontcolorA: "#FFF",
    fontcolorB: "#FFF",
    fontcolorC: "#FFF",
    fontcolorD: "#FFF",
    showcolor: '',
    length:0,
    cflag:0,
    eflag:0
    }
  },
  onReady: function () {
    var that = this
    var item = that.data.item
    item.length = that.data.item.questions.length
    this.setData({
      item: item
    })
    this.refresh();
  },

  /** 
   * 生命周期函数--监听页面显示 
   */
  onShow: function () {

  },

  /** 
   * 生命周期函数--监听页面隐藏 
   */
  onHide: function () {

  },

  /** 
   * 生命周期函数--监听页面卸载 
   */
  onUnload: function () {

  },

  /** 
   * 页面相关事件处理函数--监听用户下拉动作 
   */
  onPullDownRefresh: function () {

  },

  /** 
   * 页面上拉触底事件的处理函数 
   */
  onReachBottom: function () {

  },

  /** 
   * 用户点击右上角分享 
   */
  onShareAppMessage: function () {
    return {
      title: '图论刷题',
      desc: '你准备好了吗',
      path: '/pages/index/index'
    }
  },
  refresh: function () {
    var that = this;
    var questions = that.data.item.questions;
    var questionsA = that.data.item.questionsA;
    var questionsB = that.data.item.questionsB;
    var questionsC = that.data.item.questionsC;
    var questionsD = that.data.item.questionsD;
    var answer = that.data.item.answer;
    var bindcount = that.data.item.bindcount;
    var next = that.data.item.next;
    var item = that.data.item
    var index = Math.floor(Math.random() * (questions.length));
    if (questions.length > 0) {
      item.questionbody = questions.splice(index, 1),
        item.A = questionsA.splice(index, 1),
        item.B = questionsB.splice(index, 1),
        item.C = questionsC.splice(index, 1),
        item.D = questionsD.splice(index, 1),
        item.Ans = answer.splice(index, 1),
        item.questions = questions,
        item.questionsA = questionsA,
        item.questionsB = questionsB,
        item.questionsC = questionsC,
        item.questionsD = questionsD,
        item.answer = answer,
        item.index = index,
        item.show = '',
        item.countj = true,
        item.bindcount = bindcount + 1,
        item.borA = "1rpx solid #FFF;",
        item.backcolorA = "rgba(0,0,0,0);",
        item.borB = "1rpx solid #FFF;",
        item.backcolorB = "rgba(0,0,0,0);",
        item.borC = "1rpx solid #FFF;",
        item.backcolorC = "rgba(0,0,0,0);",
        item.borD = "1rpx solid #FFF;",
        item.backcolorD = "rgba(0,0,0,0);",
        item.fontcolorA = "#FFF",
        item.fontcolorB = "#FFF",
        item.fontcolorC = "#FFF",
        item.fontcolorD = "#FFF",
        item.cflag = 0,
        item.eflag = 0
      this.setData({
        item: item
      })
    }
    else {
      wx.showModal({
        title: '温馨提示',
        content: '没题了',
        showCancel: false
      })
    }
  },
  disp: function (e) {
    var id = e.currentTarget.id;
    var num = e.currentTarget.dataset.num;
    var count = e.currentTarget.dataset.count;
    var bindcount = e.currentTarget.dataset.bindcount;
    var rightcount = e.currentTarget.dataset.rightcount;
    var errorcount = e.currentTarget.dataset.errorcount;
    var item = this.data.item;
    if (this.data.item.countj) {
      if (id == 'A') {
        item.borA = "1rpx solid #00a57a;",
          item.backcolorA = "#FFF",
          item.fontcolorA = "#00a57a"
      }
      else if (id == 'B') {
        item.borB = "1rpx solid #00a57a;",
          item.backcolorB = "#FFF",
          item.fontcolorB = "#00a57a"
      }
      else if (id == 'C') {
        item.borC = "1rpx solid #00a57a;",
          item.backcolorC = "#FFF",
          item.fontcolorC = "#00a57a"
      }
      else {
        item.borD = "1rpx solid #00a57a;",
          item.backcolorD = "#FFF",
          item.fontcolorD = "#00a57a"
      }

      if (id == num) {
        item.show = '正确',
          item.count = count + 71,
          item.countj = false,
          item.rightcount = rightcount + 1,
          item.showcolor = '#ffc20f',
          item.cflag = 1;
        if (this.data.item.rightcount == 100) {
          wx.showModal({
            title: '中彩蛋啦',
            content: '一次答对' + this.data.item.rightcount + '道题,快去找贺老师领取奖品',
            showCancel: false
          })
          item.rightcount = 0
        }
      }
      else {
        item.show = '答案：' + num,
          item.countj = false,
          item.errorcount = errorcount + 1,
          item.showcolor = '#ee5757',
          item.eflag = 1
      }
    }
    this.setData({
      item: item
    })
  },
  Call_tips: function () {
    wx.showModal({
      title: '解析',
      content: '此题暂无解析',
      showCancel: false
    })
  }
})