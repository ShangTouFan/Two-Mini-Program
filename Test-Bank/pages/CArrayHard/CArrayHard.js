Page({
  data: {
    item:{
    questions: ['以下程序段的输出结果是( )\nint a [3][4] = {1,3,5,7,9,11,13,15,17,19,21,23 },(*p)[4]=a,i,j,k=0;\nfor(i =0;i<3;i++)\nfor(j=0;j<2;j++)\nk=k+*(*(p+i)+j);\nprintf("%d",k);', '若有以下定义和赋值语句,则与&s[i][j]等价的是( )\nint s[2][3]={0},(*p)[3],i,j;\np = s;\ni = j = 1;', '出以下定义,下列哪些操作是合法的( )\nconst char *p1 = "hello";\nchar *const p2 = "world";', 'char * const p,char const *p,const char *p上述三个的区别,说法错误的是( )', '若有下面的程序段,则下列叙述正确的是( )\nchar s[ ]="china"; char *p;p=s;', '已有如下数组定义和f函数调用语句,则在f函数的说明中,对形参数组array的正确定义方式为( )\nint a[3][4];\nf(a);', '32位系统中,定义**a[3][4],则变量占用内存空间为( )', '已知int a[]={1,2,3,4,5};int*p[]={a,a+1,a+2,a+3};int **q=p;表达式*(p[0]+1)+**(q+2)的值是( )', '执行下面的程序段后,变量k的值为( )\nint k = 3, s[2];\ns[0] = k;\nk = s[1] * 10;', '定义如下变量和数组:\nint i;\nint x[4][4]={1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16};\n则下面语句的输出结果是( )\nfor(i=0;i<4;i++)\nprintf("%3d",x[i][3-i]);', '下面程序输出的结果是( )\nint i,j,x=0;\nstatic int a[6]={1,2,3,4,5,6};\nfor(i=0,j=1;i<5;++i,j++) x+=a[i]*a[j];\nprintf("%d\\n",x);', '若希望下面的程序运行后输出45,程序空白处的正确选择是( )\nint i,j=10,a[ ]={1,3,5,7,9,11,13,15};\nfor( _________)\nj+=a[i];\nprintf("%d\\n",j);', '如有声明：char s1[5],s2[7]; ,要给数组s1和s2整体赋值,下列语句中正确的是( )', '以下程序输出的结果是( )\nchar str[ ]="1a2b3c";int i;\nfor(i=0;str[i]!=\'\\0\';i++)\nif(str[i]>=\'0\'&&str[i]<=\'9\')\nprintf("%c",str[i]);', '以下程序输出的结果是( )\nint a[ ]={5,4,3,2,1},i,j;\nlong s=0;\nfor(i=0;i<5;i++)\ns=s*10+a[i];\nprintf("s=%ld\\n",s);', '以下程序输出的结果是( )\nint a[ ]={1,2,3,4,5},i,j,s=0;\nfor(i=0;i<5;i++)\ns=s*10+a[i];\nprintf("s=%d\\n",s);', '在定义int a[5][6];后,数组a中的第10个元素是( )\nC(设a[0][0]为第一个元素)', '以下程序执行时输入Language  Programming<回车>,输出结果是( )\nchar str[30];\ngets(str);\nprintf("str=%s\\n",str);', '已知short int类型变量占用两个字节,若有定义：short int x[10]={0,2,4}; 则数组x在内存中所占字节数是( )', '在定义int a[5][4];之后,对a的引用正确的是( )', '以下程序的输出结果是( )\nint i,a[10];\nfor(i=9;i>=0;i--)  a[i]=10-i;\nprintf("%d%d%d",a[2],a[5],a[8]);', '有如下程序\nchar ch[80]="123abcdEFG*&";int j;long s=0;\nputs(ch);\nfor(j=0;ch[j]>\'\\0\';j++)\nif(ch[j]>=\'A\'&&ch[j]<=\'Z\')\nch[j]=ch[j]+\'e\'-\'E\';puts(ch);\n该程序的功能是( )', '设有如下定义:char aa[2][20]={"abcd","ABCD"};则以下说法中错误的是( )', '给定如下代码：int arr[4]={0};int brr[4]={1};数组arr和brr的值为( )', '数组定义为"int a[4] = {0};",表达式( )是错误的', '定义了一维int型数组a[10]后,下面错误的引用是( )', '在C/C++语言中,下面关于数组的描述错误的是( )', '关于 int a[10] = {1,2,3}; 下面不可以表示a[1]的地址是( )', '若已定义：int a[]=[0,1,2,3,4,5,6,7,8,9]\nint *p=a;\nint i;\n其中0<=i<=9,则对a数组错误的引用是( )', '对于一个二维数组A[m][n]若按行序为主序存储,则任一元素A[i][j]相对于A[0][0]的地址为( )', '若二维数组a有m列,则在数组元素a[i][j]前的元素个数为( )', '在C语言中,若有定义：int a[4][10](其中0<=i<4,0<=j<10);则下列选项中不能表示数组元素a[i][j]值的是( )', '下面这段c程序的输出结果是( )\nvoid foo(int b[][3]){++b;\nb[1][1]=9;}\nvoid main(){\nint a[3][3]={{1,2,3},{4,5,6},{7,8,9}};\nfoo(a);\nprintf("%d",a[2][1]);}', '三维数组A[0…4,-1…-3,5…7]中含有的元素个数是( )', '已有定义int a=2,*p1=&a,*p2=&a;下面不能正确执行的赋值语句是( )', '若有说明语句：int a, b, c, *d=&c;,则能正确从键盘读入三个整数分别赋给变量a、b、c的语句是( )', '若已定义int a=5; 下面对(1)、(2)两个语句的正确解释是( )\n(1)int *p=&a;  (2)*p=a;', '若有语句int *p,a=10;p=&a;下面均代表地址的一组选项是( )', '若有说明：int *p,a=1,b;以下正确的程序段是( )', '下面程序段的运行结果是( )\n(注：└┘代表空格)\nchar s[6];\ns="abcd";\nprintf("\\"%s\\"\\n",s);', '以下程序中调用scanf函数给变量a输入数值的方法是错误的,其错误原因是( )\nint *p,*q,a,b;\np=&a;\nprintf("input a:");\nscanf("%d",*p);', '下面判断正确的是( )', '设char *s="\\ta\\017bc";则sizeof(s)的值是( )', '下面程序段中,for循环的执行次数是( )\nchar *s="\\ta\\\\018bc";\nfor (;*s!=\'\\0\';s++) printf("*");', '以下不能正确进行字符串赋初值的语句是( )', '若指针p已正确定义,要使p指向两个连续的整型动态存储单元,不正确的语句是( )', '下面程序段的运行结果是( )\nchar *s="abcde";\ns+=2;\nprintf("%d",s);', '设有如下的程序段：char s[]="girl",*t;t=s;则下列叙述正确的是( )', '以下正确的程序段是( )', '下面程序段的运行结果是( )\nint m=10, n=20;\nchar *format="%s, m=%d, n=%d\\n";\nm*=n;\nprintf(format,"m*=n",m,n);', '以下与库函数strcpy(char *p, char *q)功能不相等的程序段是( )', '下面程序段的运行结果是( )\nchar s[]="example!",*t;\nt=s;\nwhile( *t!=\'p\'){\nprintf("%c",*t-32);\nt++;}', '以下正确的程序段是( )', '若有以下定义和语句：\nint s[4][5],(*ps)[5];\nps=s;\n则对s数组元素的正确引用形式是( )', '不合法的main函数命令行参数表示形式是( )', '若有说明语句：char s[]="it is a example.",*t="it is aexample.";则以下不正确的叙述( )', '空指针是指( )', 'test.c文件中包括如下语句：文件中定义的四个变量,不是指针类型的变量是( )', '下面叙述错误的是( )\nchar acX[]="abc";\nchar acY[]={\'a\',\'b\',\'c\'};\nchar *szX="abc";\nchar *szY="abc";', '运行以下C语言代码,输出的结果是( )\nchar *str[3]={"stra","strb","strc"};char *p = str[0];int i = 0;\nwhile(i < 3){printf("%s",p++);i++;}', '设int x[]={1,2,3,4,5,6},*p=x;则值为3的表达式是( )', 'int *(*ptr)();则以下叙述中正确的是( )', '以下关于指针的说法,正确的是( )', '下面程序的输出结果是( )\nint fun(char *s){char *p=s;\nwhile(*p !=\'\\0\') p++;\nreturn(p-s);}\nint main(){printf("%d\\n",fun("goodbye!"));}', '下列关于数组与指针的区别描述正确的是( )', '下面这段代码的运行结果是( )\nconst int i = 0;\nint *j = (int *) &i;\n*j = 1;\nprintf("%d,%d", i, *j);', '若定义一个int类型的指针数组,数组元素个数为10个,正确的是( )', '下列代码段将打印出( )\nint a=2,*p1,**p2;\np2=&p1;p1=&a;a++;\nprintf("%d,%d,%d\\n",a,*p1,**p2);', '下面程序运行的结果是( )\nunsigned int a = 0xFFFFFFF7;\nunsigned char i = (unsigned char)a;\nchar *b = (char *)&a;\nprintf("%08x,%08x",i,*b);', '下面程序运行的结果是( )\nint arr[2][10] = {{1,2,3,4,5,6,7,8,9,10},{11,12,13,14,15,16,17,18,19,20}};int (*p)[10] = arr;\nprintf("%d  ",**p);\nprintf("%d  ",**(p+1));\nprintf("%d  ",*(*p+1));\nprintf("%d  ",*(p[0]+1));', '下面程序运行的结果是( )\nint arr[] = {1,2,3,4,5};\nint *ptr = (int *)(&arr+1);\nprintf("%d %d\\n",*(arr+1),*(ptr - 1));', '对于int* pa[5];的描述,以下哪个选项是正确的( )', '给出以下定义,下列操作合法的是( )\nconst char *p1 = "hello";\nchar *const p2 = "world";', '当参数*x=1,*y=1,*z=1时,下列不可能是函数add的返回值的( )\nint add(int *x, int *y, int *z){\n*x += *x;\n*y += *x;\n*z += *y;\nreturn *z;}', '以下程序的输出结果是( )\nint a[]＝{10,20,30,40},*p ＝ a,i;\nfor(i＝0;i<＝3;i++)\n{\na[i]＝﹡p;\np++;}\nprintf("%d\\n",a[2]);', '有下面一段代码：\nchar szMsisdn[MAX_LEN_MSISDN-1];\nszMsisdn[sizeof(szMsidn)]=\'\\0\';\n则对执行以上代码后,会出现什么问题( )', '下列代码的输出是( )\nvoid print(char *s){\nif(*s){\nprint(++s);printf("%c",*s);}}\nint main(){\nchar str[]="Geneius";\nprint(str);}', '以下程序的输出结果是( )\nint fun(char *s){\nchar *p=s;\nwhile(*p !=\'\\0\') p++;\nreturn(p-s);}\nvoid main(){\nprintf("%d\\n",fun("goodbye!"));}', '下列程序的输出是( )\nint a [12]= {1,2,3,4,5,6,7,8,9,10,11,12},*p[4],i;\nfor(i=0;i<4;i++)\np[i]=&a [i*3];\nprintf("%d\\n",p[3][2]);', 'char * fun(char *t){\nchar *p=t;\nreturn(p+strlen(t)/2);}\nint main(void){char* str= "abcdefgh";\nstr= fun(str);\nputs(str);\nreturn 0;}', 'x是一个行列数均为1000二维数组,下面代码效率执行最高的是( )', '下列程序是求3×4的矩阵a中最大元素,请为横线处选择合适的代码( )\nint i,j,max;\nint a[3][4]={{1,2,3,4},{9,8,7,6},{-10,10,-5,2}};max=a[0][0];\nfor (i=0;i<=2;i++)\nfor (j=0;j<=3;j++)\nif (_____) max=a[i][j];', '若有以下语句且0<=k<6,则正确表示数组元素地址的语句是( )\nstatic int x[ ]={1,3,5,7,9,11},*ptr=x,k;', '若有定义和语句如下,则输出结果是( )\nint **pp,*p,a=10,b=20;\npp=&p; p=&a; p=&b;\nprintf("%d,%d",*p,**pp)', '以下程序程序运行后的输出结果是( )\nint c[6] = {10,20,30,40,50,60},*p,*s;\np = c;\ns = &c[5];\nprintf("%d\\n", s-p);', '请问运行下列代码的结果是?\nchar *str=(char *)malloc(100);\nstrcpy(str,"hello");\nfree(str);\nif(str != NULL){strcpy(str,"world");\nprintf(str);}', '运行下面这段代码,会出现的情况是( )\nvoid GetMemory(char *p){\np = (char *)malloc(100);}\nvoid Test(void){\nchar *str = NULL;GetMemory(str);\nstrcpy(str,"hello world");\nprintf(str);}', '以下程序的输出结果是( )\nint n[][3] = {10,20,30,40,50,60};\nint (*p)[3];\np=n;\nprintf("%d,%d,%d",p[0][0],*(p[0]+1),(*p)[2]);', '下面代码会输出( )\nint a[4]={1,2,3,4};\nint *ptr=(int*)(&a+1);\nprintf("%d",*(ptr-1));','若有定义：char s[3][4];则下列对数组元素s[i][j]的各种引用形式中,正确的是哪些?'],

    questionsA: ['A.40', 'A.*(*(p+i)+j)', 'A.p1++;', 'A.char * const p;指针常量,p的值不可以修改', 'A.s和p完全相同', 'A.f(int array[ ][6])', 'A.4', 'A.5', 'A.33', 'A.1  5  9 13', 'A.数组a中首尾的对应元素的乘积', 'A.i=5;i>1;i--', 'A.s1=getchar();  s2=getchar();', 'A.123456789', 'A.s=12345', 'A.s=12345', 'A.a[2][5]', 'A.Language  Programming', 'A.3', 'A.a[2][4]', 'A.258', 'A.测字符数组ch的长度', 'A.aa是个二维数组,可以存放2个19个字符以下的字符串', 'A.{0,0,0,0},{1,1,1,1}', 'A.*a;', 'A.a[0]=1;', 'A.数组的名字就是指向该数组第一个元素的指针', 'A.a+sizeof(int);', 'A.a[p-a]', 'A.i×n+j个元素位', 'A.j * m + i;', 'A.*(a+i)+j;', 'A.7', 'A.55', 'A.a=*p1+*p2;', 'A.scanf("%d%d%d",&a,&b,d);', 'A.语句(1)和(2)中的*p含义相同,都表示给指针变量p赋值', 'A.a,p,*&a', 'A.p=&b;  scanf("%d",&p);', 'A."abcd"', 'A.*p表示的是指针变量p的地址', 'A.char *s="girl";  等价于char *s;*s="girl";', 'A.2', 'A.5', 'A.char str[5]= "good!";', 'A.p=2*(int *)malloc(sizeof(int));', 'A.cde', 'A.s和t完全相同', 'A.char s[20];  scanf("%s",&s);', 'A.format,"m*=n",m,n', 'A.strcpy1(char *p, char *q){while ((*p++=*q++)!=\'\\0\');}', 'A.EXAMPLE!', 'A.char s[]="12345",t[]="6543d21";\nstrcpy(s,t);', 'A.ps+1', 'A.main(int a,char *c[])', 'A.s表示的是第一个字符i的地址,s+1表示的是第二个字符t的地址', 'A.所指向的空间位置未存放任何数据的指针', 'A.#define INT_PTR int*', 'A.acX与acY的内容可以修改', 'A.stra strb strc', 'A.p+=2,*++p;', 'A.ptr是指向一维数组的指针变量', 'A.int *const p与int const *p等价', 'A.0', 'A.数组要么在静态存储区被创建(如全局数组),要么在栈上被创建', 'A.0,1', 'A.int a[10];', 'A.3,2,3', 'A.000000f7,fffffff7', 'A.1  11  2  2', 'A.2 5', 'A.pa是一个具有5个元素的指针数组,每个元素是一个int类型的指针;', 'A.p1++;', 'A.4', 'A.10', 'A.没有问题', 'A.suiene', 'A.0', 'A.上述程序有错误', 'A.abcdefgh', 'A.for(int j=0;j<1000;j++) for(int i=0;i<1000;i++) x[i][j]+=x[j][i];', 'A.a[i][j]<max', 'A.x++', 'A.10 10', 'A.5', 'A.hello', 'A.hello world', 'A.10,30,50', 'A.4','A.*(s+i)[j]'],

    questionsB: ['B.60', 'B.*(p[i]+j)', 'B.p1[2] = \'w\';', 'B.char const * p;指向常量的指针,指向的常量值不可以改', 'B.数组s中的内容和指针变量p中的内容相等', 'B.f(int array[3][ ])', 'B.48', 'B.6', 'B.30', 'B.1  6 11 16', 'B.数组a中首尾的对应元素的乘积之和', 'B.i=0;i<7;++i', 'B.scanf("%s%s",s1,s2);', 'B.1a2b3c', 'B.s=5 4 3 2 1', 'B.s=1 2 3 4 5', 'B.a[2][4]', 'B.Language', 'B.6', 'B.a[1,3]', 'B.741', 'B.将数字字符串ch转换成十进制数', 'B.aa是个二维数组,每行中分别存放了字符串"abcd"和"ABCD"', 'B.{0,0,0,0},{1,0,0,0}', 'B.a[0]', 'B.a[0]=5*2;', 'B.长度为n的数组,下标的范围是0-n-1', 'B.&a[0]+1;', 'B.*(&a[i])', 'B.j×n+i个元素位', 'B.i * m + j;', 'B.*(&a[0][0]+10*i+j)', 'B.9', 'B.45', 'B.p1=a;', 'B.scanf("%d%d%d",a,b,d);', 'B.(1)和(2)语句的执行结果,都是把变量a的地址值赋给指针变量p', 'B.&*a,&a,*p', 'B.scanf("%d",&b);  *p=b;', 'B."abcd└┘"', 'B.*p表示的是变量a的值,而不是变量a的地址', 'B.char s[10]={"girl"};  等价于char s[10];s[10]={"girl"};', 'B.3', 'B.6', 'B.char *str="good!";', 'B.p=(int *)malloc(2*sizeof(int));', 'B.字符\'c\'', 'B.数组s中的内容和指针变量t中的内容相等', 'B.char *s;  scanf("%s",s);', 'B.format,"m*=n"', 'B.strcpy2(char *p,char *q){while((*p=*q)!=\'\\0\'){p++; q++;}}', 'B.example!', 'B.char s[20],*t="12345";\nstrcat(s,t);', 'B.*(ps+3)', 'B.main(int argc,char *argv)', 'B.t指向另外的字符串时,字符串的长度不受限制', 'B.所指向的空间位置存放着数据0的指针', 'B.typedef int*int_ptr;', 'B.szX与szY指向相同的地址', 'B.stra tra ra', 'B.p+=2,*p++;', 'B.ptr是指向int型数据的指针变量', 'B.const int *p与int *const p等价', 'B.6', 'B.用运算符sizeof可以计算出数组的容量(字节数)', 'B.0,0', 'B.int (*a)[10];', 'B.2,2,2', 'B.fffffff7,fffffff7', 'B.1  2  12  2', 'B.2 1', 'B.pa是一个指向数组的指针,所指向的数组是5个int类型的元素;', 'B.p1[2] = \'w\';', 'B.5', 'B.20', 'B.数组越界', 'B.neius', 'B.6', 'B.6', 'B.abcd', 'B.for(int i=0;i<1000;j++) for(int j=0;j<1000;j++) x[i][j]+=x[j][i];', 'B.a[j][i]>max', 'B.&ptr', 'B.10 20', 'B.50', 'B.world', 'B.显示为乱码', 'B.10,20,30', 'B.1','B.*(&s[0][0]+4*i+j)'],

    questionsC: ['C.80', 'C.*(p+i)+j', 'C.p2[2] = \'l\';', 'C.const char *p;常量指针,p的值不可以改变', 'C.s数组长度和p所指向的字符串长度相等', 'C.f(int array[ ][4])', 'C.192', 'C.7', 'C.10', 'C.4  7 10 13', 'C.数组a中相邻各元素的乘积', 'C.i=5;i>=1;--i', 'C.scanf("%c%c",s1,s2);', 'C.abc', 'C.s=54321', 'C.s=54321', 'C.a[1][3]', 'C.str=Language', 'C.10', 'C.a[4][3]', 'C.852', 'C.将字符数组ch中的小写字母转换成大写', 'C.aa[0]可以看作是一维数组名', 'C.{0,不确定},{1,不确定}', 'C.a;', 'C.a[10]=2;', 'C.数组的大小必须在编译时确定', 'C.(int*)&a+1//这个选项改为(int*)(&a+1);', 'C.p[i]', 'C.i×n+j+1个元素位', 'C.i * m + j - 1;', 'C.*(a[i]+j)//*(*(a+i)+j)', 'C.5', 'C.36', 'C.p1=p2;', 'C.scanf("%d%d%d",&a,&b,&d);', 'C.(1)在对p进行说明的同时进行初始化,使p指向a;(2)变量a的值赋给指针变量', 'C.*&p,*p,&a', 'C.p=&b;  scanf("%d",*p);', 'C.\\"abcd\\"', 'C.*p表示的是指针变量p的值', 'C.char *s="girl";  等价于char *s;s="girl";', 'C.4', 'C.7', 'C.char str[]="good!";', 'C.p=(int *)malloc(2*2);', 'C.字符\'c\'的地址', 'C.s数组长度和t所指向的字符串长度相等', 'C.char s[20];  scanf("%s",&s[2]);', 'C.m*=n,m=200,n=20', 'C.strcpy3(char*p, char *q){while(*p++=*q++);}', 'C.EXAM', 'C.char s[20]=" ",*t="12345";\nstrcat(s,t);', 'C.ps[0][2]', 'C.main(int arc,char **arv)', 'C.t变量中存放的地址值可以改变', 'C.所指向的空间位置可用于存放任何类型数据的指针', 'C.INT_PTR a,b;', 'C.acX占用的内存空间比acY占用的大', 'C.s s s', 'C.p+=3,*p;', 'C.ptr是指向函数的指针,该函数返回一个int型数据', 'C.const int *p与int const *p等价', 'C.7', 'C.指针可以随时指向任意类型的内存块', 'C.1,0', 'C.int *a[10];', 'C.3,3,3', 'C.fffffff7,000000f7', 'C.1  11  12  2', 'C.2 2', 'C.pa[5]表示某个数的第5个元素的值;', 'C.p2[2] = \'l\';', 'C.6', 'C.30', 'C.赋值错误', 'C.run-time error', 'C.7', 'C.8', 'C.efgh', 'C.for(int i=0;i<1000;j++) for(int j=0;j<1000;j++) x[j][i]+=x[j][i];', 'C.a[i][j]>max', 'C.&ptr[k]', 'C.20 10', 'C.6', 'C.helloworld', 'C.程序崩溃', 'C.20,40,60', 'C.2','C.*((s+i)+j)'],

    questionsD: ['D.100', 'D.(*(p+i))[j]', 'D.p2++;', '', 'D.*p与s[0]相等', 'D.f(int array[2][5])', 'D.12', 'D.8', '', 'D.4  8 12 16', 'D.数组a中相邻各元素的乘积之和', 'D.i=2;i<6;++i', 'D.gets(s1,s2);', 'D.123', 'D.以上都不对', 'D.s=5 4 3 2 1', 'D.a[1][5]', 'D.str=Language  Programming', 'D.20', 'D.a[5][0]', 'D.369', 'D.将字符数组ch中的大写字母转换成小写', 'D.aa[0][0]可以看作是一维数组名', 'D.与编译器相关', 'D.a++', 'D.a[1]=a[2]*a[0];', 'D.数组可通过值参数、地址指针、引用参数三种方式传递给函数', 'D.(int*)((char*)&a+sizeof(int));', 'D.a[10]', 'D.j×n+i+1个元素位', 'D.i * m + j + 1;', 'D.*(*(a+i)+j)', 'D.4', 'D.16', 'D.a=*p1*(*p2);', 'D.scanf("%d%d%d",a,b,*d);', 'D.(1)在对p进行说明的同时进行初始化,使p指向a;(2)将变量a的值赋予*p', 'D.&a,&*p,p', 'D.p=&b;  *p=a;', 'D.编译出错', 'D.*p只能用来说明p是一个指针变量', 'D.char s[4]= "boy",t[4]= "boy";  等价于char s[4]=t[4]= "boy";', 'D.8', 'D.8', 'D.char str[5]={\'g\',\'o\',\'o\',\'d\'};', 'D.p=(int*)calloc(2, sizeof(int));', 'D.无确定的输出结果', 'D.*t与s[0]相等', 'D.char s[20],*t=s;  scanf("%s",t[2]);', 'D.以上结果都不对', 'D.strcpy4(char *p, char *q){while(*p) *p++=*q++;}', 'D.example!', 'D.char *s = "12345",*t="54321";\nstrcat(s,t);', 'D.*(ps+1)+3', 'D.main(int argv,char*argc[])', 'D.s中只能存放16个字符', 'D.所指向的空间位置就是地址0的指针', 'D.int_ptr c,d;', 'D.szX的内容修改后,szY的内容也会被更改', 'D.s t r', 'D.p+=2,++*p;', 'D.ptr是指向函数的指针,该函数的返回值是指向int型数据的指针', 'D.int *p[10]与int (*p)[10]等价', 'D.8', 'D.用运算符sizeof可以计算出指针所指向内容的容量(指针的字节数)', 'D.1,1', 'D.int (*a[10])(int);', 'D.3,3,2', 'D.000000f7,000000f7', 'D.1  2  2  2', 'D.2 3', 'D.pa是一个指向某个数组中第5个元素的指针,该元素是int类型的变量', 'D.p2++;', 'D.7', 'D.40', 'D.忘记加地址运算符&', 'D.suieneG', 'D.8', 'D.12', 'D.fgh', 'D.for(int i=0;i<1000;i++) for(int j=0;j<1000;j++) x[i][j]+=x[i][j];', 'D.a[j][i]<max', 'D.&(x+1)', 'D.20 20', 'D.60', 'D.未定义行为', 'D.hello', 'D.10,30,60', 'D.3','D.*(*(s+i)[j])'],

    answer: ['B','C','A','C','D','C','B','A','A','C','D','C','C','D','C','A','C','D','D','C','C','D','D','C','D','C','C','C','D','A','C','A','B','B','B','A','D','D','A','D','B','C','C','D','A','B','C','D','C','C','D','C','C','C','B','D','D','B','D','B','B','D','C','D','B','A','C','C','A','A','A','A','A','D','C','B','A','D','D','C','D','C','C','D','A','D','C','B','A','B'],

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
    length: 0,
    cflag: 0,
    eflag: 0
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
        if (this.data.item.rightcount == 75) {
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