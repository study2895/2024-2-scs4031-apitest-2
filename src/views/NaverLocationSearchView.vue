<script>
import axios from 'axios'

export default {
  data() {
    return {
      searchResults: [], // 검색 결과 저장 배열
      query: '' // 사용자 입력 검색어
    }
  },

  methods: {
    // 지역 검색 API 호출
    searchLocal() {
      const URL = 'https://openapi.naver.com/v1/search/local.json'
      const clientId = 'qn6oN_8vmRm9rGqvyxGH' // 클라이언트 아이디
      const clientSecret = 'GBV7mIqujK' // 클라이언트 시크릿

      console.log('검색어:', this.query) // 사용자 입력 값 로그

      axios
        .get(URL, {
          headers: {
            'X-Naver-Client-Id': clientId,
            'X-Naver-Client-Secret': clientSecret
          },
          params: {
            query: this.query, // 사용자 입력 값을 사용
            display: 5, // 결과 표시 개수
            start: 1, // 검색 시작 위치
            sort: 'random' // 정렬 방식 (정확도순)
          }
        })
        .then((response) => {
          console.log('API 응답:', response) // API 응답 전체 로그
          this.searchResults = response.data.items // 검색 결과를 배열에 저장
          console.log('검색 결과:', this.searchResults) // 결과 항목 로그
        })
        .catch((error) => {
          console.error('API 요청 중 오류 발생:', error) // 오류 발생 시 로그
        })
    }
  }
}
</script>

<template>
  <div>
    <input v-model="query" placeholder="검색어를 입력하세요" />
    <button @click="searchLocal">검색</button>

    <div v-if="searchResults.length > 0">
      <h3>검색 결과:</h3>
      <ul>
        <li v-for="item in searchResults" :key="item.title">
          <strong>{{ item.title }}</strong
          ><br />
          {{ item.address }} ({{ item.roadAddress }})
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
input {
  padding: 8px;
  margin-right: 10px;
}

button {
  padding: 8px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
}

li {
  margin-bottom: 10px;
}
</style>
