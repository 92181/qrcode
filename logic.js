function qg(Qo,Wt,fx,ry){var i,u,r,b,j,Qd,Qr,Qt=[],Qs=[17,32,53,78,106],Ql=Qo.length,Qz=0,Qn,Qi=new Array(256),Qp=new Array(256);i=0;while(i<8){Qi[i]=1<<i;i+=1}i=8;while(i<256){Qi[i]=Qi[i-4]^Qi[i-5]^Qi[i-6]^Qi[i-8];i+=1}i=0;while(i<255){Qp[Qi[i]]=i;i+=1}function Qf(n){if(n>>31){n+=255}if(n>=256){n-=255}return Qi[n]}function Qe(i){z=Qr*8+i;while(i<z){x=i+8;while(i<x){Qk[i]=0;i+=1}i+=Qr-8}}function Qa(z){i=z+6;while(i>=z){Qk[i]=Qk[i+6*Qr]=1;i-=1}z+=Qr;i=z+4*Qr;while(i>=z){Qk[i]=Qk[i+6]=1;i-=Qr}z+=Qr;i=z+Qr*3;while(z<i){Qk[z+2]=Qk[z+3]=Qk[z+4]=1;z+=Qr}}Qh=[[1,125,128,135,183,120,180],[1,218,107,73,253,32,30,99,183,238],[1,31,250,134,178,9,88,186,0,105,89,54,251,203,13],[1,154,144,205,130,118,143,5,214,193,9,87,138,178,111,58,178,0,121,87],[1,244,198,38,72,24,82,99,94,241,199,93,162,200,165,134,100,33,104,87,234,143,147,169,2,47]];function Qg(){Qd=Qr*Qr;Qk=new Array(Qd);i=0;while(i<Qd){Qk[i]=2;i+=1}Qe(0);Qe(Qr-8);Qe(Qd-8*Qr);Qa(0);Qa(Qr-7);Qa(Qd-7*Qr);i=8;while(i<Qr-8){Qk[i*Qr+6]=i%2==0;i+=1}i=8;while(i<Qr-8){Qk[6*Qr+i]=i%2==0;i+=1}if(Qz){i=Qd-Qr*7-6;z=i-2;while(i>=z){Qk[i]=Qk[i+Qr]=Qk[i+Qr*2]=0;i-=1}i=Qd-Qr*8-5;z=i-4;while(i>=z){Qk[i]=Qk[i+4*Qr]=1;i-=1}i+=Qr;Qk[i+5]=Qk[i+1]=1;i+=Qr;Qk[i+5]=Qk[i+1]=Qk[i+3]=1;i+=Qr;Qk[i+5]=Qk[i+1]=1}i=8;x=[1,1,0,0,1,1,1,1,1];z=0;while(z<9){Qk[i]=x[z];i+=Qr;z+=1}i=Qd-Qr+8;x=[1,1,1,0,0,1,0,1];z=0;while(z<8){Qk[i]=x[z];i-=Qr;z+=1}i=Qr*8;x=[1,1,1,0,0,1,1,0];z=0;while(z<8){Qk[i]=x[z];i+=1;z+=1}i=Qr*9-8;x=[1,1,1,1,0,0,1,1];z=0;while(z<8){Qk[i]=x[z];i+=1;z+=1}y=Qs[Qz]+2;Qn=Qh[Qz];x=Qn.length;Qu=y+x-1;var Qj=new Array(Qu);Qj[0]=64|Ql>>4;Qj[1]=Ql;z=0;i=1;while(z!=Ql){Qj[i]=Qj[i]<<4&255|Qt[z]>>4;Qj[i+1]=Qt[z];i+=1;z+=1}Qj[i]=Qj[i]<<4&255|Qt[z]>>4;Qt=new Array(Qu);i=0;while(i<Qu){Qt[i]=Qj[i];i+=1}while(Qu>=x){Qy=Qp[Qt[0]];i=1;while(i<Qu){Qt[i-1]=Qt[i]^Qf(Qp[Qn[i]]+Qy);i+=1}Qu-=1}i=0;while(i<x){Qj[y]=Qt[i];i+=1;y+=1}u=-1;r=Qr-1,b=0,j=Qr-1;i=7;while(j>0){while(1){z=r*Qr+j;x=z-2;while(z>x){if(Qk[z]==2){y=Qj[b]>>i&1;if(r%2==0){y=!y}Qk[z]=y;i-=1;if(i<0){b+=1;i=7}}z-=1}r+=u;if(r<0||Qr<=r){u=-u;break}}if(j==8){j-=1}j-=2}}while(Ql>Qs[Qz]){Qz+=1}var Qr=(Qz+1)*4+17,xm=fx+Qr*Wt;i=0;while(i!=Ql){Qt[i]=Qo.charCodeAt(i);i+=1}Qg();i=0;while(i<Qd){rx=fx;while(rx<xm){if(Qk[i]){c.fillRect(rx,ry,Wt,Wt)}rx+=Wt;i+=1}ry+=Wt}}