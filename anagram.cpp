#include<bits/stdc++.h>
using namespace std;

#define ll long long int
#define yy cout<<"YES"<<endl;
#define nn cout<<"NO"<<endl; 
#define inf 1e18+1
#define bpop(x) __builtin_popcount(x)
#define mod 1000000007
#define  levi ios_base::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr);

void solve(){

    int n;
    cin>>n;

    vector<string>v;
    for(int i=0;i<n;i++){
        string x;
        cin>>x;
        v.push_back(x);
    }
    map<string,bool>mp;
    vector<pair<string,string>>vp;

    for(int i=0;i<n;i++){
        string temp=v[i];
        string temp2=temp;
        sort(temp.begin(),temp.end());
        vp.push_back({temp,temp2});
    }

    // for(int i=0;i<vp.size();i++){
    //     cout<<vp[i].first<<" "<<vp[i].second<<endl;
    //      mp[vp[i].first]=true;
    // }

    vector<vector<string>>ans;
    for(int i=0;i<vp.size();i++){
        vector<string>temp;
        for(int j=i;j<vp.size();j++){
            if(!mp[vp[i].first] && vp[i].first==vp[j].first){
                temp.push_back(vp[j].second);
            }
        }
        ans.push_back(temp);
    }
    
}

int main()
{
    levi;
    int t=1;
    // cin>>t;
    while(t--){
        solve();
    }
}