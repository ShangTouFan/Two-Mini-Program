Page({
  data: {
    questions: ['若定义int a[2][3]={1,2,3,4,5,6};则值为4的数组元素是 ______。', '32系统，函数void Func(char str[100]){}中sizeof(str)的值为________。', '设有数组定义: char array []="China";则数组array所占的存储空间为__________。', '以下不正确的定义语句是（ ）', '若二维数组a有m列，则在a[i][j]前的元素个数为（）', '以下叙述中正确的是（）', '下列对字符数组进行初始化的语句正确的是（）', '若有定义：int a[2][3];以下选项中对a数组元素正确引用的是（）', '对于以下变量定义，正确的赋值是( )\nint *p[3]，a[3];', '对两个字符a和b进行初始化:char a[]="ABCDEF";char b[]={\'A\',\'B\',\'C\',\'D\',\'E\',\'F\'};则以下叙述正确的是（）', '在C语言中，一维数组的定义方式为：元素类型 数组名[E];E为（ ）', '在下面的一维数组定义中，哪一个有语法错误。（  ）', '下列关于数组与指针的区别描述正确的是？', '下面有关空指针和未初始化指针，说法错误的是？', '下述对C语言字符数组的描述中错误的是（）', '在c语言中，下面能正确进行字符串赋值操作的是（ ）', '设char *s="\\ta\\017bc";则指针变量s指向的字符串所占的字节数是（ ）', '经过下列的语句 int j,a[10],*p;定义后,下列语句中合法的是（ ）', '若有说明int a[3][4];则a数组元素的非法引用是（ ）', 'int a=1,b=2,c=3;if(a>c)b=a;a=c;c=b;则 c 的值为（ ）', '对于基类型相同的两个指针变量之间，不能进行的运算是（ ）', '数组声明: int array[][4] 是否正确', '若有说明：int*p,m=5,n；则以下正确的程序段是（）', '若用一堆数组名作为调用函数时的实参，则传递给形参的是：（ ）', '字符串“a+b=20\\n”的长度是（ ）？', '定义了一维int型数组a[10]后，下面错误的引用是（ ）', '以下能正确定义一维数组的选项是(  )', '关于引用与指针的区别，下面叙述错误的是（ ）', '以下对一维数组a进行初始化错误的语句是（）', '以下不能正确进行字符串赋初值的语句是（ ）', 'C语言中只能逐个引用数组元素而不能一次引用整个数组。请问这句话的说法是正确的吗？', '若使用数组作函数实参，则以下正确的说法是（）', '以下叙述中正确的是（）', '以下能正确定义数组并正确赋初值的语句是（）', '以下数组定义中不正确的是（）', '若要定义一个具有 5 元素的整型数组,以下错误的定义语句是（）', 'int *p[4]与下面的选择（）等价？', '当参数*x=1, *y=1, *z=1时，下列不可能是函数add的返回值（）?\nint add(int *x, int *y, int *z)\n{*x += *x;\n*y += *x;\n*z += *y;\nreturn *z;}', '下列C代码中,不属于未定义行为的有（ ）', '对于int a[1]，可以用a++来指向数组的第二个元素。', '以数组名作函数参数时,实参数组与形参数组都不必定义长度,因此实参与形参的结合方式是地址结合,与数组长度无关。请问这句话的说法是正确的吗？', 'int (*p)[3];p的含义是什么（）', '设x、y、t均为int型变量,则执行语句：t=3;x=y=2;t=x++||++y;后,变量t和y的值分别为（ ）', '若有以下语句且0<=k<6，则正确表示数组元素地址的语句是（）\nstatic int x[ ]={1,3,5,7,9,11},*ptr=x,k;', '有说明:int i,j=2,*p=&i;则能完成i=j赋值功能的语句是（）', '假定一个二维数组的定义语句为"int a[3][4]={{3,4},{2,8,6}};",则元素a[1][2]的值为（）', '有一个二维数组A[10][5],每个数据元素占1个字节,且A[0][0]的存储地址是1000,则A[i][j]的地址是多少？', '在64位系统下，分别定义如下两个变量：char *p[10];char(*p1)[10];请问,sizeof(p)和sizeof(p1)分别值为（ ）', '以下定义语句中正确的是(  )', '变量p为指针变量,若p=&a,下列说法不正确的是（）', '已有如下数组定义和f函数调用语句，则在f函数的说明中，对形参数组array的正确定义方式为（）\nint a[3][4];\nf(a);', '执行下列语句后的结果为（）\nint x=3,y;\nint *px=&x;\ny=*px++;', '设p是指针变量,语句p＝NULL;等价于（）', '假如整型指针p已经指向某个整型变量x，则(*p)++和下面哪一个等价（）', '以下程序段的输出结果是（）\nint k, a[3][3]={1,2,3,4,5,6,7,8,9};\nfor (k = 0; k < 3; k++) printf("%d ",a[k][2-k]);', '具有相同类型的指针变量p与数组a,不能进行的操作是（）', '下面函数的执行结果是输出（）\nfunc(char para[100])\n{void *p = malloc(100);\nprintf("%d, %d\\n",sizeof(para),sizeof(p));}', '设"char **s;",以下正确的表达式是（ ）', '若有语句：int s[3][3],(*p)[3];p=s;则对s数组元素的引用形式正确的是（）', '在32位小端的机器上,如下代码输出是什么（）\nchar array[12] = {0x01,0x02,0x03,0x04,0x05,0x06,0x07,0x08};\nshort *pshort = (short *)array;\nint *pint = (int *)array;\nint64 *pint64 = (int64 *)array;\nprintf("0x%x,0x%x,0x%llx,0x%llx",*pshort,*(pshort+2),*pint64,*(pint+2));', '下列哪两个是等同的（）\nint b;\n1.const int *a = &b;\n2.const * int a = &b;\n3.const int* const a = &b;\n4.int const* const a = &b;', '若用数组名作为函数调用的实参,传递给形参的是( )', '对于定义"int *p",下列哪些说明可能是正确的( )', 'int a=5,b=-5;printf("%d,%d"),a%(-4),b%(-4));输出( )', '对于下面的C语言声明描述正确的一项是( )\nchar (*p)[16];', '以下叙述中正确的是( )', '假设已经有定义char *const name=new char[5];下面的语句中正确的是( )', '*p++;自增p还是p所指向的变量( )', '下面是两个数组的定义,正确的叙述是( )\nchar acX[]="abcdefg";\nchar acY[]={\'a\',\'b\',\'c\',\'d\',\'e,\'f\',\'g\'};', '合法的数组定义是( )', '若有以下说明：\nchar s1[ ]={"tree"},s2[]={"flower"};\n则以下对数组元素或数组的输出语句中,正确的是( )', '下列一维数组初始化语句中,正确且与语句float a[ ]={0,3,8,0,9};等价的是( )', '运行下面程序段的输出结果是( )\nchar s1[10]={\'S\',\'e\',\'t\',\'\\0\',\'u\',\'p\',\'\\0\'};\nprintf("%s",s1);', '以下程序段的输出结果是( )\nchar s[ ]="an apple";\nprintf("%d\\n",strlen(s));', '若有说明:char c[10]={\'E\',\'a\',\'s\',\'t\',\'\\0\'};,则下述说法中正确的是( )', '当接受用户输入的含有空格的字符串时,应使用的函数是( )', '以下一维数组a的正确定义是( )', '以下对二维数组a进行正确初始化的是( )', '以下关于数组的描述正确的是( )', '以下程序的输出结果是( )\n#include<stdio.h>\nvoid main(){\nint a[4][4]={{1,3,5,},{2,4,6},{3,5,7}};\nprintf("%d%d%d%d\\n",a[0][0],a[1][1],a[2][2],a[3][3]);\n}', '以下数组定义中不正确的是( )', '在执行语句int a[ ][3]={1,2,3,4,5,6};后,a[1][0]的值是( )', '以下定义语句中,错误的是( )', '下述对C语言字符数组的描述中错误的是( )', '如有定义语句int a[]={1,8,2,8,3,8,4,8,5,8}; ,则数组a的大小是( )', '下列初始化语句中,正确且与语句char c[ ]="string";等价的是( )', '若有说明char  c[7]={\'s\',\'t\',\'r\',\'i\',\'n\',\'g\'};则对元素的非法引用是( )', '下列一组初始化语句中,正确的是(  )', '下列程序段输出的结果是( )\nchar b[]="ABCDEFG";\nchar p=0;\nwhile(p<7)\nputchar(b[p++]);\nputchar(\'\\n\');', '以下程序段的输出结果是( )\nint i,x[3][3]={1,2,3,4,5,6,7,8,9};\nfor(i=0;i<3;i++)\nprintf("%d,",x[i][i]);', '若有说明：int a[3][4];,则对a数组元素的非法引用是( )', '若有说明：int a=2,*p=&a,*q=p;,则以下非法的赋值语句是( )', '若定义：int a=511,*b=&a;,则printf("%d\\n", *b);的输出结果为( )', '变量的指针,其含义是指该变量的( )', 'double *p,x=0.2345;则正确的赋值语句是( )','若已定义char s[10];则在下面表达式中不表示s[1]地址的是( )'],

    questionsA: ['A.a[0][0]', 'A.4', 'A.4个字节', 'A.double x[3] = {2.0, 4.0, 6.0, 8.0, 10.0};', 'A.j*m+i', 'A.语句int a[8] = {0}; 是合法的', 'A.char a[] = "Hello";', 'A.a[2][0]', 'A.p=a', 'A.a数组比b数组长度长', 'A.常量表达式', 'A.int a[]={1,2,3};', 'A.数组要么在静态存储区被创建（如全局数组），要么在栈上被创建', 'A.对0x0这个地址取值是非法的', 'A.字符数组可以存放字符串', 'A.char s[5]={"ABCDE"};', 'A.9', 'A.p=a;', 'A.a[0][2*1]', 'A.1', 'A.<', 'A.正确', 'A.p=&n;scanf("%d",&p);', 'A.数组首元素的地址', 'A.7', 'A.a[0] = 1;', 'A.int a[5]={0,1,2,3,4,5};', 'A.引用必须被初始化，指针不必', 'A.int a[10]={0, 0, 0, 0, 0};', 'A.char str[5]="good!";', 'A.正确', 'A.必须在主调函数中说明此数组的大小', 'A.int *p1; int **p2; int *p3;都是合法的定义指针变量的语句', 'A.int N=5,b[N][N];', 'A.int a[2][3];', 'A.int a[5] = {0};', 'A.int p[4]', 'A.4', 'A.int i=0;i=(i++);', 'A.正确', 'A.正确', 'A.一个指向int元素大小为3的指针数组', 'A.t=1 y=2', 'A.x++', 'A.i=*p;', 'A.6', 'A.1000+10i+j', 'A.4,40', 'A.A、char a=\'A\'b=\'B\';', 'A.&*p==&a', 'A.f(int array[ ][6])', 'A.x=3,y=4', 'A.p ＝\'0\';', 'A.p++', 'A.3 5 7', 'A.p=a;', 'A.4,4', 'A.s="computer";', 'A.p+1', 'A.0x201,0x403,0x807060504030201,0x0', 'A.1,4', 'A.数组的首地址', 'A.p是一个指向int型值的指针', 'A.1,-1', 'A.p是长度为16的字符指针数组', 'A.字符串常量"Hello"会被隐含处理成一个无名字符型数组,它有5个元素', 'A.name[3]=\'q\';', 'A.自增p', 'A.数组acX和数组acY等价', 'A.int a[6]={"string"};', 'A.printf("%s%s",s1[5],s2[7]);', 'A.float a[6]={0,3,8,0,9};', 'A.Set', 'A.7', 'A.c[7]不可引用', 'A.gets( )', 'A.int a(10);', 'A.int a[2][3]={{1,2},{3,4},{5,6}};', 'A.数组的大小是固定的,但可以有不同类型的数组元素', 'A.0650', 'A.int a[2][3];', 'A.4', 'A.int a[]={1,2};', 'A.字符数组可以存放字符串', 'A.10', 'A.char c[ ]={\'s\',\'t\',\'r\',\'i\',\'n\',\'g\'};', 'A.c[0]', 'A.int a(8)={ };', 'A.GFEDCBA', 'A.1,5,9,', 'A.a[0][2*1]', 'A.p=q;','A.无确定值','A.值','A.p=x;','A.s+1'],

    questionsB: ['B.a[1][0]', 'B.5', 'B.5个字节', 'B.char c2[] = {\'\\x10\', \'\\xa\', \'\\x8\'};', 'B.i*m+j', 'B.语句int a[] = {0};是不合法的，遗漏了数组的大小', 'B.char a[][]={\'H\',\'e\',\'l\',\'l\',\'o\'};', 'B.a[2][3]', 'B.*p=a[0]', 'B.a与b长度相同', 'B.整型表达式', 'B.int a[10]={0};', 'B.用运算符sizeof 可以计算出数组的容量（字节数）', 'B.空指针可以确保不指向任何对象或函数; 而未初始化指针则可能指向任何地方', 'B.字符数组中的字符串可以整体输入、输出', 'B.char s[5]={\'A\',\'B\', \'C\', \'D\',\'E\'};', 'B.5', 'B.p=a[5];', 'B.a[1][3]', 'B.2', 'B.=', 'B.错误', 'B.p=&;scanf("%d",*p);', 'B.数组首元素的值', 'B.8', 'B.a[0] = 5*2;', 'B.char a[]={0,1,2,3,4,5};', 'B.指针初始化以后不能被改变，引用可以改变所指的对象', 'B.int a[10]={ };', 'B.char str[]="good!";', 'B.错误', 'B.实参数组类型与形参数组类型可以不匹配', 'B.指针变量只能通过求地址运算符（&amp;) 来获得地址值', 'B.int a[1][2]={{1},{3}};', 'B.int b[][3]={0,1,2,3};', 'B.int a[] = {0, 0, 0, 0, 0};', 'B.int *p', 'B.5', 'B.char *p="hello";p[1]=\'E\';', 'B.错误', 'B.错误', 'B.一个指向元素个数为3的int数组的指针', 'B.t=1 y=3', 'B.&ptr', 'B.*p=*&j;', 'B.4', 'B.1000+i+j', 'B.80,8', 'B.float a=b=10.0;', 'B.*&a==a', 'B.f(int array[3][ ])', 'B.x=3,y=3', 'B.p=\'\';', 'B.x++', 'B.3 6 9', 'B.*p=a[0];', 'B.100,4', 'B.*s="computer";', 'B.*(p+1)', 'B.0x201,0x605,0x807060504030201,0x0', 'B.1,2', 'B.数组中第一个元素的值', 'B.p是一个指向一维数组的指针', 'B.1,1', 'B.p是包含16个字符的字符串', 'B.不能用字符串常量对字符数组名进行整体赋值操作', 'B.name="line";', 'B.自增p所指向的变量', 'B.数组acX和数组acY的长度相同', 'B.int a[5]={0,1,2,3,4,5};', 'B.printf("%c%c",s1,s2);', 'B.float a[4]={0,3,8,0,9};', 'B.Setup', 'B.8', 'B.c[6]可引用,但值不确定', 'B.getchar( )', 'B.int n=10,a[n];', 'B.int a[ ][3]={1,2,3,4,5,6};', 'B.数组的大小是可变的,但所有数组元素的类型必须相同', 'B.1470', 'B.int b[][3]={0,1,2,3};', 'B.1', 'B.char a[]={"test"};', 'B.字符数组中的字符串可以整体输入、输出', 'B.11', 'B.char c[ ]=\'string\';', 'B.c[9-6]', 'B.int a[9]={0,7,0,4,8};', 'B.BCDEFG', 'B.1,4,7,', 'B.a[1][3]', 'B.*p=*q;','B.a的地址','B.地址','B.p=&x;','B.s++'],

    questionsC: ['C.a[1][1]', 'C.6', 'C.6个字节', 'C.char c1[] = {\'1\',\'2\',\'3\',\'4\',\'5\'};', 'C.i*m+j-1', 'C.语句char a[2] = {"A", "B"}; 是合法的，定义了一个包含两个字符的数组', 'C.char a[5]= "Hello";', 'C.a[0][3]', 'C.p=&a[0]', 'C.a与b数组完全相同', 'C.整型常量或整型表达式', 'C.int a[];', 'C.指针可以随时指向任意类型的内存块', 'C.空指针与任何对象或函数的指针值都不相等', 'C.可以在赋值语句中通过赋值运算符"="对字符数组整体赋值', 'C.char *s;s="ABCDE";', 'C.6', 'C.p=a[2]+2;', 'C.a[4-2][0]', 'C.3', 'C.+', '', 'C.scanf("%d",&n); *p=n;', 'C.数组元素的个数', 'C.5', 'C.a[10] = 2;', 'C.char a={\'A\',\'B\',\'C\'};', 'C.删除空指针是无害的，不能删除引用', 'C.int a[]={0};', 'C.char *str="good!";', '', 'C.在被调用函数中，不需要考虑形参数组的大小', 'C.语句p=NULL;与p=\0;是等价的语句', 'C.int c[2][]={{1,2},{3,4}};', 'C.int c[100][100]={0};', 'C.int a[2+3];', 'C.int *(p[4])', 'C.6', 'C.char *p="hello";char ch=*p++;', '', '', 'C.不合法', 'C.t=2 y=2', 'C.&ptr[k]', 'C.i=&j;', 'C.2', 'C.1000+5i+j', 'C.10,10', 'C.int a=10,*b=&a;', 'C.(*p)++==a++', 'C.f(int array[ ][4])', 'C.x=4,y=4', 'C.p="";', 'C.*(p++)', 'C.1 5 9', 'C.p=&a[0];', 'C.4,100', 'C.**s="computer";', 'C.p[1][2]', 'C.0x201,0x605,0x4030201,0x8070605', 'C.3,4', 'C.数组中全部元素的值', 'C.p是一个指向二维数组的指针', 'C.-1,1', 'C.p是指向长度为16的字符数组的指针', 'C.char str[7] = "string!";在语法上是合法的,运行也是安全的', 'C.name=new char[5];', 'C.先自增p再自增p指向的变量', 'C.数组acX的长度大于数组acY的长度', 'C.char a={"string"};', 'C.puts(s1);puts(s2);', 'C.float a[7]={0,3,8,0,9};', 'C.Set up', 'C.9', 'C.c[4]不可引用', 'C.scanf( )', 'C.int n;scanf("%d",&n);int a[n];', 'C.int a[2][ ]={1,2,3,4,5,6};', 'C.数组的大小是固定的,所有数组元素的类型必须相同', 'C.5430', 'C.int c[100][100]={0};', 'C.2', 'C.char s[10]={"test"};', 'C.可以在赋值语句中通过赋值运算符"="对字符数组整体赋值', 'C.8', 'C.char c[7]={\'s\',\'t\',\'r\',\'i\',\'n\',\'g\',\'\\0\'};', 'C.c[4*2]', 'C.int a[5]={9,5,7,4,0,2};', 'C.ABCDEFG', 'C.3,5,7,', 'C.a[4-2][0]', 'C.a=*q;','C.512','C.名','C.*p=x;','C.&s[0]+1'],

    questionsD: ['D.a[2][1]', 'D.7', 'D.7个字节', 'D.int y[5+3]={0, 1, 3, 5, 7, 9};', 'D.i*m+j+1', 'D.语句char a[3]; a = "AB"; 是合法的，因为数组有三个字符空间的容量，可以保存两个字符', 'D.char a[2][5]={"Hello","World"};', 'D.a[1>2][1]', 'D.p[0]=&a[0]', 'D.a和b中都存放字符串', 'D.整型常量表达式', 'D.int a[5];', 'D.用运算符sizeof 可以计算出指针所指向内容的容量（字节数）', 'D.malloc在其内存分配失败时返回的是一个未初始化的指针', 'D.不可以用关系运算符对字符数组中的字符串进行比较', 'D.char *s;  scanf("%s",s);', 'D.7', 'D.p=&(j+2);', 'D.a[0][4]', 'D.不一定', 'D.-', '', 'D.p=&n;*p=m;', 'D.数组中全部元素的值', 'D.6', 'D.a[1] = a[2] * a[0];', 'D.int a[5]="0123";', 'D.不存在指向空值的引用，但是存在指向空值的指针', 'D.int a[10]={10*a};', 'D.char str[5]={\'g\', \'o\',\'o\', \'d\'};', '', 'D.实参数组名与形参数组名必须一致', 'D.语句p=NULL;执行后，指针p指向地址为0的存储单元', 'D.int d[3][2]={{1,2},{34}};', 'D.int d[3][]={{1,2},{1,2,3},{1,2,3,4}};', 'D.int i = 5,a[i];', 'D.int (*p)[4]', 'D.7', 'D.int i=0;printf("%d%d\\n",i++,i--);', '', '', 'D.以上说法都不正确', 'D.t=2 y=3', 'D.&(x+1)', 'D.i=**p;', 'D.8', 'D.1000+10i+5j', 'D.8,80', 'D.float *a,b=&a;', 'D.*(p++)==a++', 'D.f(int array[2][5])', 'D.x=3,y不知', 'D.p=0;', 'D.&x++', 'D.1 4 7', 'D.p=&a;', 'D.100,100', 'D.*s=\'c\';', 'D.*(p+1)+2', 'D.0x102,0x506,0x102030405060708,0x0', 'D.2,3', 'D.数组元素的个数', 'D.p是一个动态数组', 'D.-1,-1', 'D.p是长度为16的字符数组', 'D.char *str;str = "Hello";与char str[];str = "Hello";效果是一样的', 'D.name=new char(\'q\');', 'D.和机器相关', 'D.数组acX的长度小于数组acY的长度', 'D.char a[]={0,1,2,3,4,5};', 'D.puts(s1,s2);', 'D.float a[5]={0,3,8,0,9};', 'D.\'S\'\'e\'\'t\'', 'D.10', 'D.c[4]可引用,其值为空字符', 'D.printf( )', 'D.#define SIZE 10\nint a[SIZE];', 'D.int a[2][ ]={{1,2},{3,4}};', 'D.数组的大小是可变的,可以有不同类型的数组元素', 'D.输出值不定', 'D.int a[3][]={{1,2},{1,2,3},{1,2,3,4}};', 'D.5', 'D.int n=5,a[n];', 'D.不可以用关系运算符对字符数组中的字符串进行比较', 'D.不定', 'D.char c[7]={\'string\'};', 'D.c[2*3]', 'D.int a[7]=7*6;', 'D.GFEDCB', 'D.3,6,9,', 'D.a[0][2+2]','D.q=a;','D.511','D.一个标志','D.*p=&x;','D.&s[1]'],

    answer: ['B','A','C','A','B','A','A','D','D','A','D','C','B','D','C','C','C','A','D','B','C','B','D','A','A','C','B','B','D','A','A','C','A','D','D','D','C','D','C','B','B','B','A','C','B','A','C','B','C','C','C','B','D','B','A','D','A','B','C','B','C','A','A','A','C','B','A','A','C','D','C','D','A','B','D','A','D','B','C','B','D','A','D','C','A','C','C','B','C','A','D','D','D','B','B','B'],

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
  },
  onReady: function () {
    this.refresh();
  },

  /** 
   * 生命周期函数--监听页面显示 
   */
  onShow: function () {
    var that = this;
    var questions = that.data.questions;
    this.setData({
      length: questions.length
    })
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
    var questions = that.data.questions;
    var questionsA = that.data.questionsA;
    var questionsB = that.data.questionsB;
    var questionsC = that.data.questionsC;
    var questionsD = that.data.questionsD;
    var answer = that.data.answer;
    var bindcount = that.data.bindcount;
    var next = that.data.next;
    var index = Math.floor(Math.random() * (questions.length));
    if (questions.length > 0) {
      this.setData({
        questionbody: questions.splice(index, 1),
        A: questionsA.splice(index, 1),
        B: questionsB.splice(index, 1),
        C: questionsC.splice(index, 1),
        D: questionsD.splice(index, 1),
        Ans: answer.splice(index, 1),
        questions: questions,
        questionsA: questionsA,
        questionsB: questionsB,
        questionsC: questionsC,
        questionsD: questionsD,
        answer: answer,
        index: index,
        show: '',
        countj: true,
        bindcount: bindcount + 1,
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
        cflag:0,
        eflag:0
      })
    }
    else {
      wx.showModal({
        title: '温馨提示',
        content: '没题了',
        showCancel:false
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
    if (this.data.countj) {
      if (id == 'A') {
        this.setData({
          borA: "1rpx solid #00a57a;",
          backcolorA: "#FFF",
          fontcolorA: "#00a57a"
        })
      }
      else if (id == 'B') {
        this.setData({
          borB: "1rpx solid #00a57a;",
          backcolorB: "#FFF",
          fontcolorB: "#00a57a"
        })
      }
      else if (id == 'C') {
        this.setData({
          borC: "1rpx solid #00a57a;",
          backcolorC: "#FFF",
          fontcolorC: "#00a57a"
        })
      }
      else {
        this.setData({
          borD: "1rpx solid #00a57a;",
          backcolorD: "#FFF",
          fontcolorD: "#00a57a"
        })
      }

      if (id == num) {
        this.setData({
          show: '正确',
          count: count + 71,
          countj: false,
          rightcount: rightcount + 1,
          showcolor: '#ffc20f',
          cflag:1
        })
      }
      else {
        this.setData({
          show:'答案：' + num,
          countj: false,
          errorcount: errorcount + 1,
          showcolor: '#ee5757',
          eflag:1
        })
      }
    }
  },
  Call_tips: function () {
    wx.showModal({
      title: '解析',
      content: '此题暂无解析',
      showCancel: false
    })
  }
})