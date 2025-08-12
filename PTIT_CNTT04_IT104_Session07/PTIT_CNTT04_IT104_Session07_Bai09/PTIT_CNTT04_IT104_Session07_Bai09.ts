class Comment {
    id: string;
    userId: string;
    content: string;
    replies: string[];

    constructor(id: string, userId: string, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }

    addReply(reply: string): void {
        this.replies.push(reply);
        console.log(`Thêm phản hồi thành công`);
    }
}

class Post {
    id: string;
    likes: string[];
    comments: Comment[];
    userId: string;
    content: string;

    constructor(id: string, userId: string, content: string) {
        this.id = id;
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
    }

    addLike(idUser: string): void {
        if (!this.likes.includes(idUser)) {
            this.likes.push(idUser);
            console.log(`Thêm like thành công`);
        } else {
            console.log(`Người dùng này đã like rồi`);
        }
    }

    addComment(comment: Comment): void {
        this.comments.push(comment);
        console.log(`Thêm comment thành công`);
    }
}

class User {
    id: string;
    posts: Post[];
    followers: string[];

    constructor(id: string) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }

    createPost(content: string): void {
        let newPost = new Post(Date.now().toString(), this.id, content);
        this.posts.push(newPost);
        console.log(`Thêm post thành công`);
    }

    comment(postId: string, commentContent: string, arrPost: Post[]): void {
        let post = arrPost.find(p => p.id === postId);
        if (post) {
            let newComment = new Comment(Date.now().toString(), this.id, commentContent);
            post.addComment(newComment);
        } else {
            console.log("Không tìm thấy bài đăng");
        }
    }

    follow(userId: string): void {
        if (!this.followers.includes(userId)) {
            this.followers.push(userId);
            console.log("Follow thành công");
        } else {
            console.log("Bạn đã follow người này rồi");
        }
    }

    likePost(postId: string, arrPost: Post[]): void {
        let post = arrPost.find(p => p.id === postId);
        if (post) {
            post.addLike(this.id);
        } else {
            console.log("Không tìm thấy bài đăng");
        }
    }
}
