// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
int main() {
    int n;
    cout<<"enter a num : ";
    cin>>n;
    for(int i=2;i<=n/2;i++){
        if(n%i == 0){
            cout<<"false"<<endl;
            break;
        }
    }
    cout<<"true"<<endl;
    return 0;
}