import { ref } from 'vue';
import type {UserType} from "../components/Usertype";  // 型をインポート

const UserList = ref<UserType[]>([
  {id: 1, name: "ちいかわ", email: "chikawa@gmail.com"},
  {id: 2, name: "ハチワレ", email: "hachiware@gmail.com"},
  {id: 3, name: "うさぎ", email: "usagi@gmail.com"},
  {id: 4, name: "シーサー", email: "usagi@gmail.com"}
]);

export default UserList