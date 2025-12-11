import {
  HttpClient,
  HttpParams
} from "./chunk-5QUT4BWV.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IXE337CY.js";

// src/app/services/quiz.service.ts
var QuizService = class _QuizService {
  http;
  // Nginx bu isteği backend'e yönlendirecek
  apiUrl = "/api/quiz";
  constructor(http) {
    this.http = http;
  }
  getSubjects() {
    return this.http.get(`${this.apiUrl}/subjects`);
  }
  getTopics(subjectId) {
    const params = new HttpParams().set("subjectId", subjectId.toString());
    return this.http.get(`${this.apiUrl}/topics`, { params });
  }
  /**
   * Backend'den quiz sorularını getirir.
   * Token, AuthInterceptor tarafından otomatik olarak eklenecektir.
   */
  getQuestions(subjectId, topicIds, isTimed, difficulty) {
    let params = new HttpParams().set("subjectId", subjectId.toString()).set("isTimed", isTimed.toString()).set("difficulty", difficulty).set("topicIds", topicIds.join(","));
    return this.http.get(`${this.apiUrl}/questions`, { params });
  }
  /**
   * Kullanıcının cevaplarını backend'e gönderir ve skoru alır.
   * @param answers Kullanıcının cevapları
   */
  submitAnswers(quizId, answers) {
    return this.http.post(`${this.apiUrl}/submit`, { quizId, answers });
  }
  getQuizHistory() {
    return this.http.get(`${this.apiUrl}/history`);
  }
  getQuizDetails(quizId) {
    return this.http.get(`${this.apiUrl}/history/${quizId}`);
  }
  getWrongTopicStats() {
    return this.http.get(`${this.apiUrl}/stats/wrong-topics`);
  }
  getLeaderboard() {
    return this.http.get(`${this.apiUrl}/leaderboard`);
  }
  getProfileStats() {
    return this.http.get(`${this.apiUrl}/profile-stats`);
  }
  getDailyChallenge() {
    return this.http.get(`${this.apiUrl}/daily-challenge`);
  }
  getPreviousPerformance(subjectId, currentQuizId) {
    const params = new HttpParams().set("subjectId", subjectId.toString()).set("currentQuizId", currentQuizId.toString());
    return this.http.get(`${this.apiUrl}/previous-performance`, { params });
  }
  static \u0275fac = function QuizService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuizService, factory: _QuizService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  QuizService
};
//# sourceMappingURL=chunk-5C5N5YGI.js.map
